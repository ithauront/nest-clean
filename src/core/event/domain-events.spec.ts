import { AggregateRoot } from '../entities/aggregate-root'
import { UniqueEntityId } from '../entities/unique-entity-id'
import { DomainEvent } from './domain-event'
import { DomainEvents } from './domain-events'
import { vi } from 'vitest'

class CustomAggregateCreated implements DomainEvent {
  public ocurredAt: Date
  private aggregate: CustomAggregate // eslint-disable-line

  constructor(aggregate: CustomAggregate) {
    this.ocurredAt = new Date()
    this.aggregate = aggregate
  }

  public getAggregateId(): UniqueEntityId {
    return this.aggregate.id
  }
}

class CustomAggregate extends AggregateRoot<null> {
  static create() {
    const aggregate = new CustomAggregate(null)

    aggregate.addDomainEvent(new CustomAggregateCreated(aggregate))

    return aggregate
  }
}

describe('domain events', () => {
  test('if can dispatch and listen to events', () => {
    const callbackSpy = vi.fn()
    // subscriber cadastrado(ouvindo o evento da resposta) - subdomain notification
    DomainEvents.register(callbackSpy, CustomAggregateCreated.name)
    // criando uma resposta mas sem salvar no banco -subdomain forum
    const aggregate = CustomAggregate.create()
    // assegurando que o evento foi criado porem não disparado -subdomain forum
    expect(aggregate.domainEvents).toHaveLength(1)
    // salvando a resposta no banco de dados e por isso disparando o evento -subdomain forum
    DomainEvents.dispatchEventsForAggregate(aggregate.id)
    // subscriber ouve o evento e faz o que ele deve fazer - subdomain notification
    expect(callbackSpy).toHaveBeenCalled()
    // assegurando que apos que seja feito o que tem que ser feito o evento deixe de exisitr
    expect(aggregate.domainEvents).toHaveLength(0)
  })
})

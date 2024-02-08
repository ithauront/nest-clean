import { DomainEvent } from '../event/domain-event'
import { DomainEvents } from '../event/domain-events'
import { Entity } from './entity'

export abstract class AggregateRoot<Props> extends Entity<Props> {
  private _domaineEvents: DomainEvent[] = []

  get domainEvents(): DomainEvent[] {
    return this._domaineEvents
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domaineEvents.push(domainEvent)
    DomainEvents.markAggregateForDispatch(this)
  }

  public clearEvents() {
    this._domaineEvents = []
  }
}

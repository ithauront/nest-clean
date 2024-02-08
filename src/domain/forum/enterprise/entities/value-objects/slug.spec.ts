import { Slug } from './slug'

test('if can create a new lug from text', async () => {
  const slug = Slug.createFromText('Example question title ')

  expect(slug.value).toEqual('example-question-title')
})

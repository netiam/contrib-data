import data from '../src/data'

describe('netiam-contrib', () => {

  it('should set object to res.body', () => {
    const plugin = data({hello: 'world'})
    const req = {}
    const res = {}
    plugin(req, res)

    res.body.should.have.property('hello')
    res.body.hello.should.eql('world')
  })

})

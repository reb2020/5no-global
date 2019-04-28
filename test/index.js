const chai = require('chai')

const Global = require('../compiled')('test')

const expect = chai.expect

describe('Global', () => {
  beforeEach(() => {
  })

  afterEach(() => {
  })

  describe('Variables', () => {
    it('set data', async () => {
        Global.set('newV1', '100')
        
        expect(Global.get('newV1')).to.eql('100')
    })
    
    it('get data', async () => {
        expect(Global.get('newV1')).to.eql('100')
    })

    it('set another data', async () => {
      Global.set('newV2', '200')
      
      expect(Global.get('newV2')).to.eql('200')
    })
    
    it('get all data', async () => {
      expect(Global.getAll()).to.eql({
        newV1: '100',
        newV2: '200',
      })
    })
  })
})

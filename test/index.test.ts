import index from '../ts/index';
import { expect } from 'chai';
describe('Test of TS entry', (): void => {
    it('Hello world', (): void => {
        expect(index.helloWorld).to.be.equal('Hello world!');
    });
});

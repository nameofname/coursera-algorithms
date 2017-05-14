"use strict";


const expect = require('chai').expect;
const SocialNetworkConnectivity = require('../../../../src/problems/week1/socialNetworkConnectivity');
const example1 = require('../../../helpers/unionFindEx1');
const randomPairings = require('../../../fixtures/randomPairings.json');

describe('Social Network Connectivity', () => {

    it('should add to the largest property the more unions you do', () => {
        const socialNetworkConnectivity = new SocialNetworkConnectivity(10);
        expect(socialNetworkConnectivity.largest).to.equal(1);
        const socialNetworkConnectivity1 = example1.create(SocialNetworkConnectivity);
        expect(socialNetworkConnectivity1.largest).to.equal(5);
    });

    it('should should return the size of the set if every element in the set is conected', () => {
        const sn = new SocialNetworkConnectivity(10);
        sn.union(0, 1);
        sn.union(1, 2);
        sn.union(2, 3);
        sn.union(3, 4);
        sn.union(4, 5);
        sn.union(5, 6);
        sn.union(6, 7);
        sn.union(7, 8);
        sn.union(8, 9);
        expect(sn.largest).to.equal(10)
    });

    it('should help you calculate when an entire starting set is connected', () => {
        const n = 100;
        let i = 0;
        const sn = new SocialNetworkConnectivity(n);

        while (sn.largest < n && i < randomPairings.length) {
            sn.union(randomPairings[i].pair[0], randomPairings[i].pair[1]);
            i++;
        }
        expect(i).to.equal(106);
    });

});

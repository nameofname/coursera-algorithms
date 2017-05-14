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

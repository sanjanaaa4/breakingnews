module.exports.homelist = function(req, res) {
    res.render('location-list', {
        title: 'The Hindu Get the latest news updates here!',
        pageHeader: {
            title: 'The Hindu',
            strapline: 'Find latest news here!'
        },
        sidebar: "Are you interested to know latest updates?The hindu will help you to know the latest news over the world",
        locations: [{
            name: 'Politics',
            address: 'About the latest politician updates',
            rating: 3,
            facilities: ['TRS','BJP','Congress'],
            
        }, {
            name: 'Business',
            address: 'About newly evolving business man',
            rating: 4,
            facilities: ['TATA','Birla','Jio'],
            
        }, {
            name: 'Sports',
            address: 'About your favourite players ',
            rating: 2,
            facilities: ['Hockey','Cricket','Volley ball'],
            
        }]
    });
};
//locationInfo//
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Politics',
        pageHeader: {
            title: 'Politics'
        },
        sidebar: {
            context: 'Politics of India works within the framework of the country`s Constitution.',
            callToAction: 'India is a parliamentary secular democratic republic in which the president of India is the head of state & first citizen of India and the prime minister of India is the head of government.'
        },
        location: {
            name: 'Politics',
            address: 'About the latest politician updates',
            rating: 3,
            facilities: ['TRS', 'BJP', 'Congress'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'Great updates'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'Need to add more content'
            }]
        }
    });
};

//locationInfo2//
module.exports.locationInfo1 = function(req, res) {
    res.render('location-info1', {
        title: 'Business',
        pageHeader: {
            title: 'Business'
        },
        sidebar: {
            context: 'A business is defined as an organization or enterprising entity engaged in commercial, industrial, or professional activities.',
            callToAction: 'Businesses can be for-profit entities or non-profit organizations. '
        },
        location: {
            name: 'Business',
            address: 'About the newly evolving business man',
            rating: 3,
            facilities: ['TATA', 'Birla', 'Jio'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Nick Jonas',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'Jio is ruling the world'
            }, {
                author: 'Karthik Aryan',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'Can you provide the information in brief'
            }]
        }
    });
};
//locationInfo3//
module.exports.locationInfo2 = function(req, res) {
        res.render('location-info2', {
            title: 'Sports',
            pageHeader: {
                title: 'Sports'
            },
            sidebar: {
                context: 'Sport pertains to any form of physical activity or game, often competitive and organized, that aims to use, maintain, or improve physical ability and skills while providing enjoyment to participants',
                callToAction: 'A good sport helps in building confidence and leadership skills'
            },
            location: {
                name: 'Sports',
                address: 'About your favourite players',
                rating: 3,
                facilities: ['Hockey', 'Cricket', 'Volley ball'],
                coords: {
                    lat: 51.455041,
                    lng: -0.9690884
                },
                openingTimes: [{
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                }, {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                }, {
                    days: 'Sunday',
                    closed: true
                }],
                reviews: [{
                    author: 'Nick',
                    rating: 5,
                    timestamp: '16 July 2013',
                    reviewText:'Wow!this website provides best info'
                }, {
                    author: 'Charlie Chaplin',
                    rating: 3,
                    timestamp: '16 June 2013',
                    reviewText: 'Dont troll te players'
                }]
            }
        });
    };
//addReview//    
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review News on The Hindu',
        pageHeader: {
            title: 'Review News'
        }
    });
};

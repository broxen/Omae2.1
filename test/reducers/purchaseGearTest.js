var reducer = require('../../src/reducers/gear/purchaseGear'),
	state;

describe('purchaseGear', () => {
	beforeEach(() => {
		state = {
			commlinks: [{
				id: 'd808ba12-db93-4a7b-85a1-9e9f6229087f',
				name: 'Sony Emperor',
				category: 'Commlinks',
				armorcapacity: '[2]',
				capacity: '0',
				rating: '0',
				devicerating: '2',
				attack: '0',
				sleaze: '0',
				dataprocessing: '2',
				firewall: '2',
				avail: '4',
				cost: '700',
				source: 'SR5',
				page: '438'
			}],
			weapons: [{
				id: '3a7a90ce-fbb5-4599-a857-b9849eb9769c',
				name: 'Ares Alpha',
				category: 'Assault Rifles',
				type: 'Ranged',
				conceal: '6',
				accuracy: '5',
				reach: '0',
				damage: '11P',
				ap: '-2',
				mode: 'SA/BF/FA',
				rc: '2',
				ammo: '42(c)',
				avail: '11F',
				cost: '2650',
				underbarrel: 'Ares Alpha Grenade Launcher',
				allowaccessory: 'true',
				accessorymounts: {
					mount: [
						'Stock',
						'Side',
						'Internal',
						'Barrel',
						'Top',
						'Under'
					]
				},
				accessories: {
					accessory: {
						name: 'Smartgun System, Internal'
					}
				},
				source: 'SR5',
				page: '428'
			},
			{
				id: '67474de7-d29b-4b31-a6ae-1e2e981fa5d2',
				name: 'Ares Light Fire 70',
				category: 'Light Pistols',
				type: 'Ranged',
				spec: 'Semi-Automatics',
				conceal: '-2',
				accuracy: '7',
				reach: '0',
				damage: '6P',
				ap: '-',
				mode: 'SA',
				rc: '0',
				ammo: '16(c)',
				avail: '3R',
				cost: '200',
				allowaccessory: 'true',
				accessorymounts: {
					mount: [
						'Barrel',
						'Top'
					]
				},
				source: 'SR5',
				page: '425',
				mods: {
					Barrel: {
						id: '6b06cf52-04fa-4034-bb10-2bcdd58c4bfb',
						name: 'Gas-Vent 3 System',
						mount: 'Barrel',
						rating: '0',
						rc: '3',
						avail: '9R',
						cost: '600',
						source: 'SR5',
						page: '431'
					},
					slotless: {
						'Trigger Removal': {
							id: 'f2eee4ed-d0cb-4163-84d9-91e537cd13d9',
							name: 'Trigger Removal',
							rating: '0',
							accuracy: '1',
							avail: '2',
							cost: '50',
							source: 'HT',
							page: '182'
						},
						'Gecko Grip': {
							id: '627f212a-ac15-4739-afbc-f44676dfe508',
							name: 'Gecko Grip',
							rating: '0',
							avail: '6',
							cost: '100',
							source: 'RG',
							page: '52'
						}
					}
				},
				currentCost: 950
			}],
			armors: [{
				id: '5a650844-8f24-48e7-829f-0443d9ff5cf7',
				name: 'Actioneer Business Clothes',
				category: 'Armor',
				armor: '8',
				armorcapacity: '8',
				avail: '8',
				cost: '1500',
				source: 'SR5',
				page: '437'
			},
			{
				id: '40826eaa-c22a-43da-8730-bc1867ea65a1',
				name: 'Armor Clothing',
				category: 'Armor',
				armor: '6',
				armorcapacity: '6',
				avail: '2',
				cost: '450',
				source: 'SR5',
				page: '437',
				currentCost: 1750,
				capacity: 6,
				mods: {
					Nonconductivity: {
						id: '0cfb049a-a1bd-4daa-96be-9468c37d9c3c',
						name: 'Nonconductivity',
						category: 'General',
						armor: '0',
						maxrating: '6',
						armorcapacity: 'FixedValues([1],[2],[3],[4],[5],[6])',
						avail: '6',
						cost: 'Rating * 250',
						source: 'SR5',
						page: '438',
						rating: 5,
						currentCost: 1250
					},
					'Faraday Pocket': {
						id: "c3ea670b-45e7-4b75-a85d-1801c91d1c8c",
						name: "Faraday Pocket",
						category: "General",
						armor: "0",
						maxrating: "1",
						armorcapacity: "[1]",
						avail: "7R",
						cost: "50",
						source: "HT",
						page: "185"
					}
				}
			},
			{
				id: '4ad1eeab-daf3-4495-a73d-fbb0ce89be5b',
				name: 'Armor Vest',
				category: 'Armor',
				armor: '9',
				armorcapacity: '9',
				avail: '4',
				cost: '500',
				source: 'SR5',
				page: '437',
				currentCost: 1000,
				capacity: 2,
				mods: {
					Nonconductivity: {
						id: '0cfb049a-a1bd-4daa-96be-9468c37d9c3c',
						name: 'Nonconductivity',
						category: 'General',
						armor: '0',
						maxrating: '6',
						armorcapacity: 'FixedValues([1],[2],[3],[4],[5],[6])',
						avail: '6',
						cost: 'Rating * 250',
						source: 'SR5',
						page: '438',
						rating: 2,
						currentCost: 500
					}
				}
			}],
			nuyen: 3350
		};
	});


	const metalink = {
		id: '89a0f3c9-5ef6-41cd-981f-4ac690ee2ab3',
		name: 'Meta Link',
		category: 'Commlinks',
		rating: '0',
		capacity: '0',
		armorcapacity: '[2]',
		devicerating: '1',
		attack: '0',
		sleaze: '0',
		dataprocessing: '1',
		firewall: '1',
		avail: '2',
		cost: '100',
		source: 'SR5',
		page: '438'
	};

	it('should not change the passed state', (done) => {
		reducer(state, {type: 'INVALID'});

		done();
	});

	describe('PURCHASE', () => {
		it('should add a key for a new category of gear, and add that gear', () => {
			const gear = {
				id: '2633cf38-90a6-4843-b475-e3ee1132fb5f',
				name: 'Gas Mask',
				category: 'Survival Gear',
				armorcapacity: '[2]',
				rating: '0',
				avail: '0',
				cost: '200',
				source: 'SR5',
				page: '449'
			},
			newState = reducer(state, {type: 'PURCHASE', parameter: {gear: gear, category: 'gears', Rating: 3} });
			expect(newState.gears[0]).to.equal(gear);
			expect(newState.nuyen).to.equal(3550);
			expect(state.gears).to.be.undefined;
			expect(state.nuyen).to.equal(3350);
		});

		it('should set the key of currentCost by the rating and cost and give a key of currentRating', () => {
			const gear = {
				id: '7e887224-6896-4588-a5d3-cace6a8506d2',
				name: 'White Noise Generator',
				rating: '6',
				category: 'Communications and Countermeasures',
				armorcapacity: '[2]',
				avail: '(Rating)',
				cost: 'Rating * 50',
				source: 'SR5',
				page: '441'
			},
				newState = reducer(state, {type: 'PURCHASE', parameter: {gear: gear, category: 'gears', Rating: 1} });


			expect(newState.gears[0].currentRating).to.equal(1);
			expect(newState.gears[0].currentCost).to.equal(50);

			expect(newState.gears[0]).to.deep.equal({
				...gear,
				currentRating: 1,
				currentCost: 50
			});
			expect(newState.nuyen).to.equal(3400);
			expect(state.gears).to.be.undefined;
			expect(state.nuyen).to.equal(3350);
		});

		it('should add a gear to its category if the key already exists', () => {
			const newState = reducer(state, {type: 'PURCHASE', parameter: {gear: metalink, category: 'commlinks'}});

			expect(newState.commlinks.length).to.equal(2);
			expect(newState.commlinks[1]).to.equal(metalink);
			expect(newState.nuyen).to.equal(3450);
			expect(state.commlinks.length).to.equal(1);
			expect(state.nuyen).to.equal(3350);
		});
	});

	describe('SELL', ()=>{
		it('should remove a piece of gear from the gear array', () => {
			state.commlinks.push(metalink);
			state.nuyen += 100;
			const newState = reducer(state, {type: 'SELL', parameter: {index: 0, category: 'commlinks'}});

			expect(newState.commlinks.length).to.equal(1);
			expect(newState.nuyen).to.equal(2750);
			expect(state.commlinks.length).to.equal(2);
			expect(state.nuyen).to.equal(3450);
		});

		it('should remove a key if the gear array becomes empty', () => {
			const newState = reducer(state, {type: 'SELL', parameter: {index: 0, category: 'commlinks'}});

			expect(newState.commlinks).to.be.undefined;
			expect(newState.nuyen).to.equal(2650);
			expect(state.commlinks.length).to.equal(1);
			expect(state.nuyen).to.equal(3350);
		});

		it('should refund the cost of a modded weapon cost', () => {
			const newState = reducer(state, {type: 'SELL', parameter: {index: 1, category: 'weapons'}});

			expect(newState.weapons.length).to.equal(1);
			expect(newState.nuyen).to.equal(2400);
			expect(state.weapons.length).to.equal(2);
			expect(state.nuyen).to.equal(3350);
		});
	});

	describe('WEAPON_MODDING', () => {
		const stockMod = {
			id: '71a37dd2-d162-4829-a233-5afdd954691d',
			name: 'Hip Pad Bracing System',
			mount: 'Stock',
			rating: '0',
			avail: '4',
			cost: '250',
			rc: '1',
			rcgroup: '2',
			source: 'RG',
			page: '52'
		};

		it('should add a mod key to a weapon and populate it with the mod', () => {
			const newState = reducer(state, {type: 'WEAPON_MODDING', parameter: {index: 0, category: 'weapons', slot: 'stock', mod: stockMod}});

			expect(newState.weapons[0].mods.stock).to.equal(stockMod);
			expect(newState.weapons[0].currentCost).to.equal(2900);
			expect(newState.nuyen).to.equal(3600);

			expect(state.weapons[0].mods).to.be.undefined;
			expect(state.weapons[0].currentCost).to.be.undefined;
			expect(state.nuyen).to.equal(3350);
		});

		it('should add or subtract the difference of a weapon mod\'s cost being changed out', () => {
			const stockMod2 = {
				id: '88d0e08b-1ac2-442e-8f2f-dfaeb9cda9ab',
				name: 'Stock Removal',
				mount: 'Stock',
				conceal: '-1',
				rating: '0',
				avail: '2',
				cost: '20',
				source: 'HT',
				page: '182'
			};
			const newState = reducer(state, {type: 'WEAPON_MODDING', parameter: {index: 0, category: 'weapons', slot: 'stock', mod: stockMod}});
			expect(newState.weapons[0].currentCost).to.equal(2900);
			expect(newState.nuyen).to.equal(3600);
			expect(state.weapons[0].currentCost).to.be.undefined;
			expect(state.nuyen).to.equal(3350);

			const newState2 = reducer(newState, {type: 'WEAPON_MODDING', parameter: {index: 0, category: 'weapons', slot: 'stock', mod: stockMod2}});
			expect(newState2.weapons[0].mods.stock).to.equal(stockMod2);
			expect(newState2.weapons[0].currentCost).to.equal(2670);
			expect(newState2.nuyen).to.equal(3370);
			expect(newState.weapons[0].currentCost).to.equal(2900);
			expect(newState.nuyen).to.equal(3600);
			expect(state.weapons[0].currentCost).to.be.undefined;
			expect(state.nuyen).to.equal(3350);
		});

		it('should do reset remove the slot if there is no mod given', () => {
			const newState = reducer(state, {type: 'WEAPON_MODDING', parameter: {index: 0, category: 'weapons', slot: 'stock', mod: stockMod}});
			expect(newState.weapons[0].currentCost).to.equal(2900);
			expect(newState.nuyen).to.equal(3600);
			expect(state.weapons[0].currentCost).to.be.undefined;
			expect(state.nuyen).to.equal(3350);

			const newState2 = reducer(newState, {type: 'WEAPON_MODDING', parameter: {index: 0, category: 'weapons', slot: 'stock', mod: ''}});

			expect(newState2.weapons[0].mods.stock).to.be.undefined;
			expect(newState2.nuyen).to.equal(3350);
			expect(newState.weapons[0].currentCost).to.equal(2900);
			expect(newState.nuyen).to.equal(3600);
		});

		it('should return state if no mod is passed in to an empty mod slot', () => {
			const newState = reducer(state, {type: 'WEAPON_MODDING', parameter: {index: 0, category: 'weapons', slot: 'stock', mod: ''}});

			expect(newState).to.equal(state);
		})
	});

	const triggerMod = {
		id: 'f2eee4ed-d0cb-4163-84d9-91e537cd13d9',
		name: 'Trigger Removal',
		rating: '0',
		accuracy: '1',
		avail: '2',
		cost: '50',
		source: 'HT',
		page: '182'
	};

	describe('MODDING_MULTI', () => {
		it('should add an item to a slot that takes mutliple mods', () => {

			const newState = reducer(state, {type: 'MODDING_MULTI', parameter: {index: 0, category: 'weapons', slot: 'slotless', mod: triggerMod}});

			expect(newState.weapons[0].mods.slotless['Trigger Removal']).to.equal(triggerMod);
			expect(newState.weapons[0].currentCost).to.equal(2700);
			expect(newState.nuyen).to.equal(3400);

			expect(state.weapons[0].mods).to.be.undefined;
			expect(state.weapons[0].currentCost).to.be.undefined;
			expect(state.nuyen).to.equal(3350);
		});

		it('should add another item to the slot', () => {
			const newState1 = reducer(state, {type: 'MODDING_MULTI', parameter: {index: 0, category: 'weapons', slot: 'slotless', mod: triggerMod}});

			const geckoGrip = {
				id: '627f212a-ac15-4739-afbc-f44676dfe508',
				name: 'Gecko Grip',
				rating: '0',
				avail: '6',
				cost: '100',
				source: 'RG',
				page: '52'
			};

			const newState2 = reducer(newState1, {type: 'MODDING_MULTI', parameter: {index: 0, category: 'weapons', slot: 'slotless', mod: geckoGrip}});

			expect(newState2.weapons[0].mods.slotless['Trigger Removal']).to.equal(triggerMod);
			expect(newState2.weapons[0].mods.slotless['Gecko Grip']).to.equal(geckoGrip);
			expect(newState2.weapons[0].currentCost).to.equal(2800);
			expect(newState2.nuyen).to.equal(3500);

			expect(state.weapons[0].mods).to.be.undefined;
			expect(state.weapons[0].currentCost).to.be.undefined;
			expect(state.nuyen).to.equal(3350);
		});
	});

	describe('DEMODDING_MULTI', () => {
		it('should remove an item from a slot that takes mutliple mods', () => {
			const geckoGrip = {
				id: '627f212a-ac15-4739-afbc-f44676dfe508',
				name: 'Gecko Grip',
				rating: '0',
				avail: '6',
				cost: '100',
				source: 'RG',
				page: '52'
			};
			const newState = reducer(state, {type: 'DEMODDING_MULTI', parameter: {index: 1, category: 'weapons', slot: 'slotless', demodName: 'Trigger Removal'}});

			expect(newState.weapons[1].mods.slotless['Trigger Removal']).to.be.undefined;
			expect(newState.weapons[1].mods.slotless['Gecko Grip']).to.deep.equal(geckoGrip);
			expect(newState.weapons[1].currentCost).to.equal(900);
			expect(newState.nuyen).to.equal(3300);


			expect(state.weapons[1].mods.slotless['Trigger Removal']).to.deep.equal(triggerMod);
			expect(state.weapons[1].mods.slotless['Gecko Grip']).to.deep.equal(geckoGrip);
			expect(state.weapons[1].currentCost).to.equal(950);
			expect(state.nuyen).to.equal(3350);
		});
	});

	describe('MODDING_CAPACITY', () => {
		const shockFrills = {
			id: 'dbdaf817-9bfa-4938-a195-b53c63b53e7c',
			name: 'Shock Frills',
			category: 'General',
			armor: '0',
			maxrating: '1',
			armorcapacity: '[2]',
			avail: '6R',
			cost: '250',
			source: 'SR5',
			page: '438'
		},
			thermalDamp = {
			id: 'ba32a6e9-4e6f-47fe-8fd7-c3194a5174d6',
			name: 'Thermal Damping',
			category: 'General',
			armor: '0',
			maxrating: '6',
			armorcapacity: 'FixedValues([1],[2],[3],[4],[5],[6])',
			avail: '10R',
			cost: 'Rating * 500',
			source: 'SR5',
			page: '438'
		};

		it('should add a mod and add capacity based off of the mod', () => {
			const newState = reducer(state, {type: 'MODDING_CAPACITY', parameter: {index: 0, category: 'armors', mod: shockFrills}});

			expect(newState.armors[0].mods['Shock Frills']).to.equal(shockFrills);
			expect(newState.armors[0].currentCost).to.equal(1750);
			expect(newState.nuyen).to.equal(3600);
			expect(newState.armors[0].capacity).to.equal(2);

			expect(state.armors[0].mods).to.be.undefined;
			expect(state.armors[0].currentCost).to.be.undefined;
			expect(state.nuyen).to.equal(3350);
		});

		it('should add not reset mods that have previously been added', () => {
			const newState = reducer(state, {type: 'MODDING_CAPACITY', parameter: {index: 2, category: 'armors', mod: shockFrills}});

			expect(Object.keys(newState.armors[2].mods).length).to.equal(2);
			expect(newState.armors[2].mods['Shock Frills']).to.equal(shockFrills);
			expect(newState.armors[2].currentCost).to.equal(1250);
			expect(newState.nuyen).to.equal(3600);
			expect(newState.armors[2].capacity).to.equal(4);

			expect(Object.keys(state.armors[2].mods).length).to.equal(1);
			expect(state.armors[2].currentCost).to.equal(1000);
			expect(state.nuyen).to.equal(3350);
		});

		it('should not add a mod if it will be more then the capacity limit of the gear', () => {
			const newState = reducer(state, {type: 'MODDING_CAPACITY', parameter: {index: 1, category: 'armors', mod: shockFrills}});

			expect(newState.armors[1].mods['Shock Frills']).to.be.undefined;
			expect(newState.armors[1].currentCost).to.equal(1750);
			expect(newState.nuyen).to.equal(3350);
			expect(newState.armors[1].capacity).to.equal(6);

			expect(state.armors[1]).to.equal(newState.armors[1]);
			expect(state.nuyen).to.equal(3350);
		});

		it('should add a mod with a rating and calculate the currentCost based off of the rating', () => {
			const newState = reducer(state, {type: 'MODDING_CAPACITY', parameter: {index: 0, category: 'armors', mod: thermalDamp, Rating: 3}});

			expect(newState.armors[0].mods['Thermal Damping'].currentCost).to.equal(1500);
			expect(newState.armors[0].mods['Thermal Damping'].currentRating).to.equal(3);
			expect(newState.armors[0].currentCost).to.equal(3000);
			expect(newState.armors[0].rating).to.equal(3);
			expect(newState.armors[0].capacity).to.equal(3);
			expect(newState.nuyen).to.equal(4850);

			expect(state.armors[0].mods).to.be.undefined;
			expect(state.armors[0].currentCost).to.be.undefined;
			expect(state.nuyen).to.equal(3350);
		});
	});

	describe('DEMODDING_CAPACITY', () => {
		it('should remove a mod and lower capacity', () => {
			const newState = reducer(state, {type: 'DEMODDING_CAPACITY', parameter: {index: 1, category: 'armors', demodName: 'Faraday Pocket'}});

			expect(newState.armors[1].mods['Faraday Pocket']).to.be.undefined;
			expect(newState.armors[1].capacity).to.equal(5);
			expect(newState.armors[1].currentCost).to.equal(1700);
			expect(newState.nuyen).to.equal(3300);

			expect(state.armors[1].mods['Faraday Pocket']).to.be.defined;
			expect(state.armors[1].capacity).to.equal(6);
			expect(state.armors[1].currentCost).to.equal(1750);
			expect(state.nuyen).to.equal(3350);
		});

		it('should remove a mod and lower capacity by rating', () => {
			const newState = reducer(state, {type: 'DEMODDING_CAPACITY', parameter: {index: 1, category: 'armors', demodName: 'Nonconductivity'}});

			expect(newState.armors[1].mods['Nonconductivity']).to.be.undefined;
			expect(newState.armors[1].capacity).to.equal(1);
			expect(newState.armors[1].currentCost).to.equal(500);
			expect(newState.nuyen).to.equal(2100);

			expect(state.armors[1].mods['Faraday Pocket']).to.be.defined;
			expect(state.armors[1].capacity).to.equal(6);
			expect(state.armors[1].currentCost).to.equal(1750);
			expect(state.nuyen).to.equal(3350);
		});
	});
});

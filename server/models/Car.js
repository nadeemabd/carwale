var mongoose = require('mongoose');

var newCarSchema = mongoose.Schema({
	name: {
		type: String,
		required: '{PATH} is required!'
	},
	price: {
		type: Number,
		required: '{PATH} is required!'
	},
	description: {
		type: String,
		required: '{PATH} is required!'
	},
	image: {
		type: String,
		required: '{PATH} is required!'
	},
	type: {
		type: String,
		required: '{PATH} is required!'
	},
	features: {
		type: Object,
		required: '{PATH} is required!'
	}
});

var Car = mongoose.model('Car', newCarSchema);

function createDefaultCars() {
	Car.find({}).exec(function(err, collection) {
		if (collection.length === 0) {
			Car.create({
				name: 'Lamborghini Huracan',
				price: 25000000,
				description: 'The Lamborghini Gallardo has been the Italian automaker’s most successful Car to date with a total production of 14,002 units in its 10-year life span. When it announced that the Gallardo was being retired, many said that the successor had big shoes to fill and would probably have to just as crazy as the Gallardo was when it was launched. It seems that after all the hype Lamborghini has not disappointed when it launched the Huracan LP 610-4 in April of this year. It is now bringing the Car to India and will launch it on September 22.',
				image: 'Lamborghini_Huracan',
				type: 'Upcoming',
				features: {
					engine: '5,204 cm, Diesel, 610 CV (449 kW) @ 8,250 RPM',
					gearboxes: 'All-wheel drive with electrohydraulic multi-plate clutch',
					seating: '2 Seater',
					steering: 'Electromechanical power steering'
				}
			});
			Car.create({
				name: 'Skoda Yeti',
				price: 2054000,
				description: 'Skoda took the wraps off the Yeti facelift at the 2014 Auto Expo in February. It was earlier unveiled at the 2013 Frankfurt Motor Show and currently is on sale in a few international markets. The Indian Car market might get this urban SUV in the second half of this year.',
				image: 'Skoda_Yeti',
				type: 'New',
				features: {
					engine: '1968 cc, Diesel, 108 bhp @ 4200 RPM power',
					gearboxes: '6-speed, Manual, 4WD ',
					seating: '5 seater',
					steering: 'Power steering'
				}
			});
			Car.create({
				name: 'BMW X3',
				price: 4990000,
				description: 'The BMW X3 is the German automaker’s entry-level SUV and has been on sale in the Indian market for over four years now. In that time it has revised the SUV at least twice and then began its local production.',
				image: 'BMW_X3',
				type: 'New',
				features: {
					engine: '1995 cc, Diesel, 190 bhp @ 4000 RPM power',
					gearboxes: '8-speed, Automatic, 4WD',
					seating: '5 seater',
					steering: 'Power steering'
				}
			});
			Car.create({
				name: 'Tata Zest',
				price: 699000,
				description: 'The Tata Zest compact sedan is the first of the new vehicles from the Pune-based automaker. It was first shown just ahead of the Auto Expo, and was launched in the middle of 2014 in five diesel and four petrol variants. It features a very similar design to that of the hatchback but includes a noticeable but quite decent looking boot. It makes use of the same engine, underpinnings, interior design as well as feature list from the hatchback. The variant nomenclature is new to this family of vehicles and runs across both petrol and diesel engine options- XE, XM, XMS, XT and XMA , the last of which is specific to the diesel range and has been mated to the five-speed AMT.',
				image: 'Tata_Zest',
				type: 'New',
				features: {
					engine: '1248 cc, Diesel, 74 bhp @ 4000 RPM power',
					gearboxes: '5-speed, Manual, FWD',
					seating: '5 seater',
					steering: 'Power steering'
				}
			});
			Car.create({
				name: 'Maruti Suzuki Alto LXi',
				price: 266355,
				description: 'The Tata Zest compact sedan is the first of the new vehicles from the Pune-based automaker. It was first shown just ahead of the Auto Expo, and was launched in the middle of 2014 in five diesel and four petrol variants. It features a very similar design to that of the hatchback but includes a noticeable but quite decent looking boot. It makes use of the same engine, underpinnings, interior design as well as feature list from the hatchback. The variant nomenclature is new to this family of vehicles and runs across both petrol and diesel engine options- XE, XM, XMS, XT and XMA , the last of which is specific to the diesel range and has been mated to the five-speed AMT.',
				image: 'Maruti_Suzuki_Alto_LXi',
				type: 'Featured',
				features: {
					engine: '1248 cc, Diesel, 74 bhp @ 4000 RPM power',
					gearboxes: '5-speed, Manual, FWD',
					seating: '5 seater',
					steering: 'Power steering'
				}
			});
			Car.create({
				name: 'Tata Nano LX',
				price: 697839000,
				description: 'The Tata Zest compact sedan is the first of the new vehicles from the Pune-based automaker. It was first shown just ahead of the Auto Expo, and was launched in the middle of 2014 in five diesel and four petrol variants. It features a very similar design to that of the hatchback but includes a noticeable but quite decent looking boot. It makes use of the same engine, underpinnings, interior design as well as feature list from the hatchback. The variant nomenclature is new to this family of vehicles and runs across both petrol and diesel engine options- XE, XM, XMS, XT and XMA , the last of which is specific to the diesel range and has been mated to the five-speed AMT.',
				image: 'Tata_Nano_LX',
				type: 'Featured',
				features: {
					engine: '1248 cc, Diesel, 74 bhp @ 4000 RPM power',
					gearboxes: '5-speed, Manual, FWD',
					seating: '5 seater',
					steering: 'Power steering'
				}
			});
			Car.create({
				name: 'Chevrolet Spark LT',
				price: 699000,
				description: 'The Tata Zest compact sedan is the first of the new vehicles from the Pune-based automaker. It was first shown just ahead of the Auto Expo, and was launched in the middle of 2014 in five diesel and four petrol variants. It features a very similar design to that of the hatchback but includes a noticeable but quite decent looking boot. It makes use of the same engine, underpinnings, interior design as well as feature list from the hatchback. The variant nomenclature is new to this family of vehicles and runs across both petrol and diesel engine options- XE, XM, XMS, XT and XMA , the last of which is specific to the diesel range and has been mated to the five-speed AMT.',
				image: 'Chevrolet_Spark_LT',
				type: 'New',
				features: {
					engine: '1248 cc, Diesel, 74 bhp @ 4000 RPM power',
					gearboxes: '5-speed, Manual, FWD',
					seating: '5 seater',
					steering: 'Power steering'
				}
			});
			Car.create({
				name: 'Volkswagen Beetle',
				price: 699000,
				description: 'Volkswagen Beetle comes in following versions with 1 engine and 1transmission and 1 fuel options. Click on a Beetle version name to know on-road price in your city, specifications and features.The date December 04, 2009 will remain etched in minds of Beetle lovers in the country. It was on this day when the ‘New Beetle’ drove into the Indian roads – almost 70 years (1938) since the birth of the first Bug in Germany. The Beetle as it is known today was a demand made by Hitler to Ferdinand Porsche to build a ‘people’s car’ – one that can transport two adults and two children. Well, whether the car today is really a people’s car is a big question – it comes at a whopping price(Rs 21.47lakh, ex-showroom Mumbai).',
				image: 'Volkswagen_Beetle',
				type: 'Featured',
				features: {
					engine: '1984 cc, Petrol, 114 bhp @ 5400 RPM power ',
					gearboxes: '6-speed, Automatic, FWD',
					seating: '4 seater ',
					steering: 'Power steering'
				}
			});
			Car.create({
				name: 'Hyundai i20 Asta',
				price: 699000,
				description: 'The Tata Zest compact sedan is the first of the new vehicles from the Pune-based automaker. It was first shown just ahead of the Auto Expo, and was launched in the middle of 2014 in five diesel and four petrol variants. It features a very similar design to that of the hatchback but includes a noticeable but quite decent looking boot. It makes use of the same engine, underpinnings, interior design as well as feature list from the hatchback. The variant nomenclature is new to this family of vehicles and runs across both petrol and diesel engine options- XE, XM, XMS, XT and XMA , the last of which is specific to the diesel range and has been mated to the five-speed AMT.',
				image: 'Hyundai_i20_Asta',
				type: 'Featured',
				features: {
					engine: '1248 cc, Diesel, 74 bhp @ 4000 RPM power',
					gearboxes: '5-speed, Manual, FWD',
					seating: '5 seater',
					steering: 'Power steering'
				}
			});
			Car.create({
				name: 'Audi Q5',
				price: 6011000,
				description: 'The Audi Q5 is a perfect combination of sporty dynamism offered in a sedan combined with highly variable interiors that offer versatile options for leisure or business use. Strong and efficient engines, quattro permanent all-wheel drive and agile running gear have been brought together to create a superior technology package for both on- and off-road driving.',
				image: 'Audi_Q5',
				type: 'Upcoming',
				features: {
					engine: '2967 cc, Diesel, 241 bhp @ 4000 RPM power ',
					gearboxes: '7-speed, Automatic, AWD ',
					seating: '5 seater',
					steering: 'Power steering'
				}
			});
			Car.create({
				name: 'Renault Pulse',
				price: 7000000,
				description: 'Renault and Nissan share the same plant in Chennai to manufacture their cars for the Indian car market. The two automakers have a global joint-venture to share their technology as well. Renault now plans to launch a new small car, which will be based on the Micra platform.',
				image: 'Renault_Pulse',
				type: 'Upcoming',
				features: {
					engine: '1461 cc, Diesel, 63 bhp @ 4000 RPM power ',
					gearboxes: '5-speed, Manual, FWD',
					seating: '5 seater',
					steering: 'Power steering'
				}
			});
			Car.create({
				name: 'Land Rover Freelander 2',
				price: 4800000,
				description: 'Land Rover Freelander 2 comes in following versions with 1 engine and 1transmission and 1 fuel options. Click on a Freelander 2 version name to know on-road price in your city, specifications and features.',
				image: 'Land_Rover_Freelander_2',
				type: 'Upcoming',
				features: {
					engine: '2179 cc, Diesel, 187 bhp @ 3500 RPM power ',
					gearboxes: '6-speed, Automatic, AWD ',
					seating: '5 seater',
					steering: 'Power steering'
				}
			});
		}
	});
}

exports.createDefaultCars = createDefaultCars;
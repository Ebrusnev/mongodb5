var MongoClient = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/gsClasses';
MongoClient.connect(url, function(err, db) {
	console.log("Connected correctly to server");

							//--------------5--------------\\

/*	db.collection('posts')
	.find({'author.name':{$exists: true}})
	.count(function(err, docs){
		if (err) {
			return console.log("Error", err);
		}
		console.log(docs);
		db.close();
	});*/


							//--------------6--------------\\

/*	db.collection('posts')
	.find({'comments': {$size: 5}})
	.count(function(err, docs){
		if (err) {
			return console.log("Error", err);
		}
		console.log(docs);
		db.close();
	});*/


							//--------------7--------------\\

/*	db.collection('posts')
	.find({$or: [{
		'comments': {$size: 10}
	},{
		'author.age': {$gt: 28}
		}]
	})
	.count(function(err, docs){
		if (err) {
			return console.log("Error", err);
		}
		console.log(docs);
		db.close();
	});*/
							//--------------8--------------\\

/*	db.collection('posts')
	.find({'author.age': {$gt: 25}})
	.count(function(err, docs){
		if (err) {
			return console.log("Error", err);
		}
		console.log(docs);
		db.close();
	});*/


							//--------------9--------------\\

/*	db.collection('posts')
	.find({$and: [{
		'author.age': {$gte: 18}
	},{
		'author.age': {$lte: 35}
		}]
	})
	.count(function(err, docs){
		if (err) {
			return console.log("Error", err);
		}
		console.log(docs);
		db.close();
	});*/


							//--------------10--------------\\

/*	db.collection('posts')
	.find({$or: [{
		'published': true
	},{
		'author.eyeColor': 'green'
		}]
	})
	.count(function(err, docs){
		if (err) {
			return console.log("Error", err);
		}
		console.log(docs);
		db.close();
	});*/


							//--------------11--------------\\

/*	db.collection('posts')
	.find({$and: [{
		'author.age': {$lt: 40}
	},{
		'author.gender': 'female'
		}]
	})
	.count(function(err, docs){
		if (err) {
			return console.log("Error", err);
		}
		console.log(docs);
		db.close();
	});*/



							//--------------13--------------\\

/*	db.collection('posts')
	.deleteMany({published:false}, function(err){
		if (err) {
			return console.log("Error", err);
		}
		console.log("success");
		db.close();
	});*/

/*	db.collection('posts')
	.find({published:true})
	.count(function(err, docs){
		if (err) {
			return console.log("Error", err);
		}
		console.log(docs);
		db.close();
	})*/

							//--------------14--------------\\

/*	db.collection('posts')
	.updateMany({'author.age':{$lt: 18}}, {$set: {'ageStatus': "Школота"}}, function(err){
		if (err) {
			return console.log("Error", err);
		}
		console.log("success");
		db.close();
	});*/

/*
	db.collection('posts')
	.find({'ageStatus': "Школота"})
	.count(function(err, docs){
		if (err) {
			return console.log("Error", err);
		}
		console.log(docs);
		db.close();
	})*/


							//--------------15--------------\\

/*	db.collection('posts')
	.updateMany({'tags':{$elemMatch: {$eq: 'adipisicing'}}}, {$set:{'published': false}}, function(err){
		if (err) {
			return console.log("Error", err);
		}
		console.log("success");
		db.close();
	})*/


/*	db.collection('posts')
	.find({$and: [{
		'published':false
		},{
		'tags':{$elemMatch: {$eq: 'adipisicing'}}
		}]
	})
	.count(function(err, docs){
		if (err) {
			return console.log("Error", err);
		}
		console.log(docs);
		db.close();
	})*/


	/*db.collection('posts')
	.updateMany({'tags':{$all: ['adipisicing']}}, {$set:{'published': false}}, function(err){
		if (err) {
			return console.log("Error", err);
		}
		console.log("success");
		db.close();
	})*/



							//--------------16--------------\\

/*	db.collection('posts')
	.updateMany({'tags':{$all: ['occaecat', 'anim']}}, {$set:{'comments': []}}, function(err){
		if (err) {
			return console.log("Error", err);
		}
		console.log("success");
		db.close();
	})*/


/*	db.collection('posts')
	.find({$and: [{
			'comments': {$not:{$size: 0}}
			}, {
			'tags':{$all: ['occaecat', 'anim']}
			
		}]
	})
	.count(function(err, docs){
		if (err) {
			return console.log("Error", err);
		}
		console.log(docs);
		db.close();
	})*/

/*	db.collection('posts')
	.updateMany({
			'comments':{$elemMatch: {$and: [{
				'author.age': {$lt: 18}
			},{
				'author.eyeColor': 'green'
			}
			]}}
		}, {
			$set:{'comments': []}
		}, function(err){
		if (err) {
			return console.log("Error", err);
		}
		console.log("success");
		db.close();
	})*/


/*	db.collection('posts')
	.find({$and: [{
			'comments': {$not:{$size: 0}}
			}, {
			'tags':{$all: ['occaecat', 'anim']}
			
		}]
	})
	.count(function(err, docs){
		if (err) {
			return console.log("Error", err);
		}
		console.log(docs);
		db.close();
	})*/



					//-----------12*---------\\

	db.collection('posts')
	.find({$and: [{
			'published': true
			}, {
			$where: "this.tags.length > 5"
			
		}]
	})
	.count(function(err, docs){
		if (err) {
			return console.log("Error", err);
		}
		console.log(docs);
		db.close();
	})
});
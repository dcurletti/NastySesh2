if (Exercises.find().count() === 0) {
	
	// EXERCISES

	// ExerciseLog.insert({
	// 	userId: '1234',
	// 	workoutId: Workouts.findOne({name: "Day 1- Chest"})._id,
	// 	exerciseId: Exercises.findOne({name: "Bench Press"})._id,
	// 	repsCompleted: 0,
	// 	repsGoal: 10,
	// 	setsCompleted: 0,
	// 	setsGoal: 4
	// })

	Exercises.insert({
		name: "Bench Press",
		type: "Strength",
		mainMuscleGroup: "Chest",
		secondaryMuscleGroups: ["Triceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Barbell", "Bench"],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 5
	});

	Exercises.insert({
		name: "Peck Deck",
		type: "Strength",
		mainMuscleGroup: "Chest",
		secondaryMuscleGroups: ["Triceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Barbell", "Bench"],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 3
	});

	Exercises.insert({
		name: "Dumbell Incline Bench Press",
		type: "Strength",
		mainMuscleGroup: "Chest",
		secondaryMuscleGroups: ["Triceps", "Shoulders"],
		mechanics: "Isolation",
		equipment: ["Dumbell", "Bench"],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 2
	});

	Exercises.insert({
		name: "LAT Pulldown",
		type: "Strength",
		mainMuscleGroup: "Back",
		secondaryMuscleGroups: ["Biceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Machine"],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 5
	});

	Exercises.insert({
		name: "T-Row Pulls",
		type: "Strength",
		mainMuscleGroup: "Back",
		secondaryMuscleGroups: ["Biceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Machine"],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 5
	});

	Exercises.insert({
		name: "Chinups",
		type: "Strength",
		mainMuscleGroup: "Back",
		secondaryMuscleGroups: ["Biceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Machine"],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 5
	});

	Exercises.insert({
		name: "Situp",
		type: "Strength",
		mainMuscleGroup: "Core",
		secondaryMuscleGroups: ["Core"],
		mechanics: "Compound",
		equipment: [],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 5
	});

	Exercises.insert({
		name: "Squat",
		type: "Strength",
		mainMuscleGroup: "Legs",
		secondaryMuscleGroups: ["Triceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Barbell", "Rack"],
		difficulty: "Intermediate",
		force: "Push", 
		overallRating: 5
	});
};


// WORKOUTS
if (Workouts.find().count() < 3) {
	for (var i = 1000; i >= 0; i--) {
		Workouts.insert({
			userId: "1111",
			name: "Day 1- Chest",
			difficulty: "Intermediate",
			mainMuscleGroup: "Chest", //Future fun to parse most common mainMuscle
			secondaryMuscleGroups: ["Triceps", "Shoulders"], //Fun to parse exerc
			equipment: ["Barbell", "Rack"], //Function to parse exercise equipment
			overallRating: 5,
			estimatedTime: 60,
			public: true,
			exerciseList: [
						Exercises.findOne({name: "Bench Press"})._id,
						Exercises.findOne({name: "Peck Deck"})._id,
						Exercises.findOne({name: "Dumbell Incline Bench Press"})._id 
						]
		});

		Workouts.insert({
			userId: "2222",
			name: "Day 2- Back",
			difficulty: "Intermediate",
			mainMuscleGroup: "Back", //Future fun to parse most common mainMuscle
			secondaryMuscleGroups: ["Triceps", "Shoulders"], //Fun to parse exerc
			equipment: ["Barbell", "Rack"], //Function to parse exercise equipment
			overallRating: 3,
			estimatedTime: 50,
			public: true,
			exerciseList: [
							Exercises.findOne({name: "LAT Pulldown"})._id,
							Exercises.findOne({name: "T-Row Pulls"})._id,
							Exercises.findOne({name: "Chinups"})._id
							]
		});
	};
		
};

// WorkoutLog.insert({
// 	userId: '1234',
	
// })



if (Routines.find().count() === 0) {

	Routines.insert({
		userId: "1111", 
		name: "Doug's Bulking 4 Day Split", 
		routineType: "Bulking",
		difficulty: "Intermediate",
		dayType: "Numerical",
		public: true,
		workouts: [{
			workoutId: Workouts.findOne({name: "Day 1- Chest"})._id,
			name: "Day 1- Chest",
			mainMuscleGroup: "Chest"}
		,{
			workoutId: Workouts.findOne({name: "Day 2- Back"})._id,
			name: "Day 2- Back",
			mainMuscleGroup: "Back"}
		]
	});
	Routines.insert({
		userId: "2222", 
		name: "Doug's Cutting 3 Day Split", 
		routineType: "Cutting",
		difficulty: "Beginner",
		dayType: "Numerical",
		public: true,
		timesPerWeek: 3,
		workouts: [{
			workoutId: Workouts.findOne({name: "Day 1- Chest"})._id,
			name: "Day 1- Chest",
			mainMuscleGroup: "Chest"}
		,{
			workoutId: Workouts.findOne({name: "Day 2- Back"})._id,
			name: "Day 2- Back",
			mainMuscleGroup: "Back"}
		]
	})
};
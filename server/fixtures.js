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
		exerciseName: "Bench Press",
		type: "Strength",
		mainMuscleGroup: "Chest",
		secondaryMuscleGroups: ["Triceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Barbell", "Bench"],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 5,
        description: 'exercise description'
	});

	Exercises.insert({
		exerciseName: "Peck Deck",
		type: "Strength",
		mainMuscleGroup: "Chest",
		secondaryMuscleGroups: ["Triceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Barbell", "Bench"],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 3,
        description: 'exercise descriptions'
	});

	Exercises.insert({
		exerciseName: "Dumbell Incline Bench Press",
		type: "Strength",
		mainMuscleGroup: "Chest",
		secondaryMuscleGroups: ["Triceps", "Shoulders"],
		mechanics: "Isolation",
		equipment: ["Dumbell", "Bench"],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 2,
        description: 'exercise descriptions'
	});

	Exercises.insert({
		exerciseName: "LAT Pulldown",
		type: "Strength",
		mainMuscleGroup: "Back",
		secondaryMuscleGroups: ["Biceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Machine"],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 5,
        description: 'exercise description'
	});

	Exercises.insert({
		exerciseName: "T-Row Pulls",
		type: "Strength",
		mainMuscleGroup: "Back",
		secondaryMuscleGroups: ["Biceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Machine"],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 5,
        description: 'exercise description'
	});

	Exercises.insert({
		exerciseName: "Chinups",
		type: "Strength",
		mainMuscleGroup: "Back",
		secondaryMuscleGroups: ["Biceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Machine"],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 5,
        description: 'exercise description'
	});

	Exercises.insert({
		exerciseName: "Situp",
		type: "Strength",
		mainMuscleGroup: "Core",
		secondaryMuscleGroups: ["Core"],
		mechanics: "Compound",
		equipment: [],
		difficulty: "Beginner",
		force: "Push", 
		overallRating: 5,
        description: 'exercise description'
	});

	Exercises.insert({
		exerciseName: "Squat",
		type: "Strength",
		mainMuscleGroup: "Legs",
		secondaryMuscleGroups: ["Triceps", "Shoulders"],
		mechanics: "Compound",
		equipment: ["Barbell", "Rack"],
		difficulty: "Intermediate",
		force: "Push", 
		overallRating: 5,
        description: 'exercise description'
	});
};


// WORKOUTS
if (Workouts.find().count() < 3) {
		Workouts.insert({
			userId: "1111",
			workoutName: "Day 5- Chest",
			difficulty: "Intermediate",
			mainMuscleGroup: "Chest", //Future fun to parse most common mainMuscle
			secondaryMuscleGroups: ["Triceps", "Shoulders"], //Fun to parse exerc
			equipment: ["Barbell", "Rack"], //Function to parse exercise equipment
			overallRating: 5,
			estimatedTime: 60,
            description: 'workout description',
			exercises: [{
                exerciseId: Exercises.findOne({exerciseName: "Bench Press"})._id,
                exerciseName: Exercises.findOne({exerciseName: "Bench Press"}).exerciseName,
                mainMuscleGroup: Exercises.findOne({exerciseName: "Bench Press"}).mainMuscleGroup,
                difficulty: Exercises.findOne({exerciseName: "Bench Press"}).difficulty,
                setList: [
                    {set: 1, reps: 12},
                    {set: 2, reps: 10},
                    {set: 3, reps: 8},
                    {set: 4, reps: 6}
                    ]
                }
                ,{
                    exerciseId: Exercises.findOne({exerciseName: "Situp"})._id,
                    exerciseName: Exercises.findOne({exerciseName: "Situp"}).exerciseName,
                    mainMuscleGroup: Exercises.findOne({exerciseName: "Situp"}).mainMuscleGroup,
                    difficulty: Exercises.findOne({exerciseName: "Situp"}).difficulty,
                    setList: [
                        {set: 1, reps: 12},
                        {set: 2, reps: 10},
                        {set: 3, reps: 8},
                        {set: 4, reps: 6}
                        ]
                }
            ]
		});

		Workouts.insert({
			userId: "2222",
			workoutName: "Day 3- Back",
			difficulty: "Intermediate",
			mainMuscleGroup: "Back", //Future fun to parse most common mainMuscle
			secondaryMuscleGroups: ["Triceps", "Shoulders"], //Fun to parse exerc
			equipment: ["Barbell", "Rack"], //Function to parse exercise equipment
			overallRating: 3,
			estimatedTime: 50,
            description: 'workout description',
			exercises: [{
                exerciseId: Exercises.findOne({exerciseName: "Bench Press"})._id,
                exerciseName: Exercises.findOne({exerciseName: "Bench Press"}).exerciseName,
                mainMuscleGroup: Exercises.findOne({exerciseName: "Bench Press"}).mainMuscleGroup,
                difficulty: Exercises.findOne({exerciseName: "Bench Press"}).difficulty
            }
                ,{
                    exerciseId: Exercises.findOne({exerciseName: "Situp"})._id,
                    exerciseName: Exercises.findOne({exerciseName: "Situp"}).exerciseName,
                    mainMuscleGroup: Exercises.findOne({exerciseName: "Situp"}).mainMuscleGroup,
                    difficulty: Exercises.findOne({exerciseName: "Situp"}).difficulty
                }
            ]
		});
		
};

// WorkoutLog.insert({
// 	userId: '1234',
	
// })



if (Routines.find().count() <= 0) {

	Routines.insert({
		userId: "1111", 
		routineName: "Doug's Bulking 4 Day Split", 
		fitnessType: "Bulking",
		difficulty: "Intermediate",
		frequencyType: "Numerical",
		workoutFrequency: 3,
		public: true,
		description: 'meowmoew',
		workouts: [{
			workoutId: Workouts.findOne({workoutName: "Day 5- Chest"})._id,
			workoutName: Workouts.findOne({workoutName: "Day 5- Chest"}).workoutName,
			mainMuscleGroup: Workouts.findOne({workoutName: "Day 5- Chest"}).mainMuscleGroup,
			difficulty: Workouts.findOne({workoutName: "Day 5- Chest"}).difficulty 
		}
		,{
			workoutId: Workouts.findOne({workoutName: "Day 3- Back"})._id,
			workoutName: Workouts.findOne({workoutName: "Day 3- Back"}).workoutName,
			mainMuscleGroup: Workouts.findOne({workoutName: "Day 3- Back"}).mainMuscleGroup,
			difficulty: Workouts.findOne({workoutName: "Day 3- Back"}).difficulty 
		}
		]
	});
	Routines.insert({
		userId: "2222", 
		routineName: "Doug's Cutting 3 Day Split", 
		fitnessType: "Cutting",
		difficulty: "Beginner",
		frequencyType: "Numerical",
		workoutFrequency: 3,
		public: true,
		description: 'meowmoew',
		workouts: [{
			workoutId: Workouts.findOne({workoutName: "Day 5- Chest"})._id,
			workoutName: Workouts.findOne({workoutName: "Day 5- Chest"}).workoutName,
			mainMuscleGroup: Workouts.findOne({workoutName: "Day 5- Chest"}).mainMuscleGroup,
			difficulty: Workouts.findOne({workoutName: "Day 5- Chest"}).difficulty 
		}
		,{
			workoutId: Workouts.findOne({workoutName: "Day 3- Back"})._id,
			workoutName: Workouts.findOne({workoutName: "Day 3- Back"}).workoutName,
			mainMuscleGroup: Workouts.findOne({workoutName: "Day 3- Back"}).mainMuscleGroup,
			difficulty: Workouts.findOne({workoutName: "Day 3- Back"}).difficulty
		}	 
		]
	})
};
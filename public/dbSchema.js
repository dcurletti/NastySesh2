User

{
    _id: "00776aa",
    name: "Joe Doe",
    emails: [{}],
    lastLogin: DateObject(),
    currentRoutine: {},
    lastWorkout: {},
    lastBodyStats: {},
    homeGym: "24 Hour Fitness"
}

Exercise

{
    _id: "00easdfkj43",
    exerciseName: "Bench Press",
    mainMuscleGroup: "Chest",
    type: "Strength",
    secondaryMuscleGroups: ["Triceps", "Shoulders"],
    equipment: ["Barbell", "Bench"],
    mechanics: "Compound",
    difficulty: "Beginner",
    force: "Push",
    overallRating: 5,
    userRating: **relationalToRatingCollection**,
    description: {blablalba}
}

Workout
{
    _id: "0234hsdf",
    userId: "23sdf89234",
    workoutName: "Day 1- Chest",
    difficulty: "Intermediate",
    mainMuscleGroup: "Chest", //Future fun to parse most common mainMuscle
    secondaryMuscleGroups: ["Triceps", "Shoulders"], //Fun to parse exerc
    equipment: [],
    overallRating: 5,
    estimatedTime: 50,
    userRating: //Get rating
    description: {blablabal},
    exercises: [{exerciseId, exerciseName, mainMuscleGroup, difficulty}]

}

Routine
{
    _id: "234jsdf3",
    userId: "345fdg4",
    routineName: "Spartan Bulking Routine",
    fitnessType: "Bulking",
    frequencyType: "Numerical",
    workoutFrequency: 3,
    difficulty: "Advanced",
    description: "",
    userRating: 4,
    workouts: [{workoutId, workoutName, mainMuscleGroup, difficulty}]

}

userExercise

{
    _id: "575768aa",
    _workoutId: "423o42m"
    by: {_userId: "55400asdf", name: "Joe"},
    exercise: {*bench press object*},
    1RPM: 150,
        Sets: [{set: 1, weight: 150, duration: 45, timeBtwnReps: 60},
        {set:2, weight: 160, duration: 50, timeBtwnReps: 60}]
}

userWorkout

{
    _workoutId: "995hbhn239",
    name: "Day 4",
    type: "Upper Body",
    exercises: [{benchpressObject}, {squatObject}]
    totalForce : 15000,
    1RPMrecords: 3,
    totalWorkoutTime: 60,
    gym: {gymObject},

}

UserExerciseActivity

{
    _id: 'aslkdf234',
    userId: '1111',
    exerciseId: 's;dkfj23',
    workoutId: 'adsf;asdf',
    createdAt: ISODate(),
    completedAt: ISODate(),
    1RPM: 200,
    forceExerted: 5000,
    sets: [{
        set: 1,
        weight: 150,
        duration: 45,
        reps: 10,
        timeBtwnReps: 60},
    }]
}
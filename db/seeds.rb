Workout.destroy_all
WorkoutMuscleGroup.destroy_all
MuscleGroup.destroy_all
User.destroy_all
Comment.destroy_all
Food.destroy_all
UserFood.destroy_all
Description.destroy_all
WorkoutDescription.destroy_all

puts "Destroyed everything"

User.create([{ username: 'Sandy', email: "sandy@email.com", password: "123" }, { username: 'Bob', email: "bob@email.com", password: "123" }, { username: 'Bill', email: "bill@email.com", password: "123" }, { username: 'Kate', email: "kate@email.com", password: "123" }, { username: 'Tom', email: "tom@email.com", password: "123" }])
Workout.create([{
   name: "Bear Crawl",
   reps: "6-8",
   sets: "4",
   image: "https://media.self.com/photos/616f19f946e2eb217d91ef30/4:3/w_3479,h_2609,c_limit/Shauna_Bear_Crawl_MG_7998.jpg",
   difficulty_level: "Intermediate",
   fav: false,
}, 
{ 
    name: "Tricep Dips",
    reps: "8",
    sets: "4",
    image: "https://www.verywellfit.com/thmb/A7pSeN273IHboeOIf4kx9M1oUpw=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/About-2A15-TricepDips-935-e3cd3eddc0c149fc91299b420aa6b236.jpg",
    difficulty_level: "Beginner",
    fav: false,
},
{ 
    name: "Fire Hydrants",
    reps: "20-25",
    sets: "4",
    image: "https://cdn.shopify.com/s/files/1/0425/4210/4739/articles/Glute_Kickback_2400x.jpg?v=1595200895",
    difficulty_level: "Beginner",
    fav: false,
},
{
    name: "Glute Kickback",
    reps: "25-30",
    sets: "3",
    image: "https://www.wikihow.com/images/thumb/1/12/Do-a-Glute-Kickback-Step-2.jpg/v4-460px-Do-a-Glute-Kickback-Step-2.jpg",
    difficulty_level: "Beginner",
    fav: false,
 }, 
 {
    name: "Plank",
    reps: "30 sec hold",
    sets: "3",
    image: "https://www.verywellfit.com/thmb/6hvBJmXEkXu9TP7uIzTVSt47ae8=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Verywell-11-3567193-Plank-679-74ff050ef03e477bab8e4317010f77f3.jpg",
    difficulty_level: "Beginner",
    fav: false,
 },
 {
    name: "Handstand Pushup",
    reps: "5",
    sets: "4",
    image: "https://www.sportsperformancept.com/wp-content/uploads/2018/07/IMG-0612.jpg",
    difficulty_level: "Advanced",
    fav: false,
 }
    ])

m1 = MuscleGroup.create(name: "biceps")
m2 = MuscleGroup.create(name: "triceps")
m3 = MuscleGroup.create(name: "quadriceps")
m4 = MuscleGroup.create(name: "core")
m5 = MuscleGroup.create(name: "lower body")
m6 = MuscleGroup.create(name: "back")
m7 = MuscleGroup.create(name: "upper body")
m8 = MuscleGroup.create(name: "glutes")

WorkoutMuscleGroup.create([
{ 
    workout_id: Workout.first.id,
    muscle_group_id: m5.id
},
{ 
    workout_id: Workout.first.id,
    muscle_group_id: m4.id
},
{ 
    workout_id: Workout.first.id,
    muscle_group_id: m7.id
},
{ 
    workout_id: Workout.first.id,
    muscle_group_id: m6.id
},
{ 
    workout_id: Workout.second.id,
    muscle_group_id: m2.id
},
{ 
    workout_id: Workout.third.id,
    muscle_group_id: m3.id
},
{ 
    workout_id: Workout.third.id,
    muscle_group_id: m4.id
},
{ 
    workout_id: Workout.third.id,
    muscle_group_id: m5.id
},
{ 
    workout_id: Workout.third.id,
    muscle_group_id: m8.id
},
{ 
    workout_id: Workout.fourth.id,
    muscle_group_id: m8.id
},
{ 
    workout_id: Workout.fifth.id,
    muscle_group_id: m4.id
},
{ 
    workout_id: Workout.last.id,
    muscle_group_id: m7.id
},
{ 
    workout_id: Workout.last.id,
    muscle_group_id: m4.id
}
])

Food.create([
{ 
    calories: 100,
    name: "Apple",
    time: "9:00 am"
},
{ 
    calories: 300,
    name: "Chobani yogurt",
    time: "12:00 pm"
},
{ 
    calories: 1000,
    name: "Popeyes medium meal",
    time: "7:30 pm"
},
{ 
    calories: 280,
    name: "Frosted Flakes Cereal",
    time: "7:30 am"
}
])

Comment.create([
{ 
    workout_id: Workout.first.id,
    user_id: User.third.id,
    description: "Loved this workout"
},
{ 
    workout_id: Workout.second.id,
    user_id: User.first.id,
    description: "Wanted something more challenging"
},
{ 
    workout_id: Workout.last.id,
    user_id: User.second.id,
    description: "Mehh"
},
{ 
    workout_id: Workout.fifth.id,
    user_id: User.second.id,
    description: "I felt the burn in my core!"
},
{ 
    workout_id: Workout.last.id,
    user_id: User.last.id,
    description: "This is not for the faint-hearted!"
},
{ 
    workout_id: Workout.fourth.id,
    user_id: User.fourth.id,
    description: "Definetely needed for when you want to build that booty!"
},
{ 
    workout_id: Workout.second.id,
    user_id: User.fifth.id,
    description: "Needed something a little more challenging"
},
])

UserFood.create([
{ 
    user_id: User.first.id,
    food_id: Food.second.id
},
{ 
    user_id: User.second.id,
    food_id: Food.first.id
},
{ 
    user_id: User.third.id,
    food_id: Food.third.id
},
{ 
    user_id: User.fourth.id,
    food_id: Food.fourth.id
}
])

d1 = Description.create(instruction: "Start the bear crawl in a push-up position. Hands are beneath the shoulders, the back is strong, and your core is engaged. The feet should be hip-distance apart with heels off the floor.")
d2 = Description.create(instruction: "Move forward by simultaneously moving the right hand and the left leg in a crawling motion. Your knees never touch the ground.")
d3 = Description.create(instruction: "Switch sides immediately after placing weight on the right hand and left leg, moving the left hand and right leg forward.")
d4 = Description.create(instruction: "Continue in a crawling motion, moving forward for your desired number of steps or distance.")
d5 = Description.create(instruction: "Sit on the edge of a stable chair, weight bench, or step and grip the edge next to your hips. Your fingers should be pointed at your feet, your legs extended, and your feet about hip-width apart, with the heels touching the ground. Look straight ahead with your chin up.")
d6 = Description.create(instruction: "Press into your palms to lift your body and slide forward just far enough that your behind clears the edge of the chair.")
d7 = Description.create(instruction: "Lower yourself until your elbows are bent between 45 and 90 degrees. Control the movement throughout the range of motion.")
d8 = Description.create(instruction: "Push yourself back up slowly until your arms are almost straight, and repeat.")
d9 = Description.create(instruction: "Begin in the quadruped (tabletop) position, with your hands and knees on the floor. Use an exercise mat for cushioning. Hands should be directly beneath the shoulders and knees under the hips. Keep a forward gaze. This is the starting position.")
d10 = Description.create(instruction: "Engage your core and abduct or lift your right leg away from your body, keeping your knee flexed at a 90-degree angle. Move the knee away from the body approximately 45 degrees, or as high as your flexibility allows.")
d11 = Description.create(instruction:"Hold for 3 to 5 seconds.")
d12 = Description.create(instruction: "Reverse the movement by slowly lowering the knee back toward the floor.")
d13 = Description.create(instruction: "Pause briefly and repeat, finishing your repetitions on the right side before switching to the left.")
d14 = Description.create(instruction: "Start in a quadruped position on your yoga mat. Check your hand and knee placement. Your hands should be directly under your shoulders and your knees directly under your hips.")
d15 = Description.create(instruction: "Engage your core, and make sure your back is straight and flat from the base of your pelvis to the top of your head.")
d16 = Description.create(instruction: "Shift your weight slightly to the right side, keeping your torso stable as you do—your hips and shoulders shouldn't twist or rotate as you shift.")
d17 = Description.create(instruction: "Press your left foot up toward the ceiling, keeping your knee bent at a 90-degree angle as you fully extend your left hip. Exhale as you perform the hip extension. Again, make sure your torso remains flat and stable—don't allow your left hip to rotate out or up as your hip extends.")
d18 = Description.create(instruction: "Lower your left knee back toward the floor, slowly and with control. Stop just before it touches down, then inhale and lower your knee all the way down to fhe mat.")
d19 = Description.create(instruction: "Complete a full set of repetitions to one side before switching to the opposite side.")
d20 = Description.create(instruction: "Select a position where you can extend your whole body length. Using an exercise mat will give you enough padding to be comfortable on all fours. You can choose whether to perform a plank on your palms or your forearms, as shown in the video.")
d21 = Description.create(instruction: "Begin in the plank position, face down with your forearms and toes on the floor. Your elbows are directly under your shoulders and your forearms are facing forward. Your head is relaxed and you should be looking at the floor.")
d22 = Description.create(instruction: "Engage your abdominal muscles, drawing your navel toward your spine. Keep your torso straight and rigid and your body in a straight line from your ears to your toes with no sagging or bending. This is the neutral spine position. Ensure your shoulders are down, not creeping up toward your ears. Your heels should be over the balls of your feet.")
d23 = Description.create(instruction: "Hold this position for 10 seconds. Release to floor.")
d24 = Description.create(instruction: "Over time work up to 30, 45, or 60 seconds.")
d25 = Description.create(instruction: "Before attempting a handstand push-up, set up a cushion (like an ab mat or a yoga mat) against the wall to protect your head and neck.")
d26 = Description.create(instruction: "Stand facing the wall. Bend down and place your hands six to 12 inches away from the wall, fingers spread and pressing into the ground. Kick up into a handstand. Kick hard enough so that you get up in one swoop, but not so hard that your heels bounce off the wall.")
d27 = Description.create(instruction: "Steady yourself once you are inverted by tucking your tailbone under, drawing your navel to your spine, tightening your abs, and squeezing your glutes. Your body should form one solid, straight line.")
d28 = Description.create(instruction: "Bend your elbows to lower yourself to the mat beneath your head. Use control, so you do not slam your head into the ground. Even if you have a cushion, that will hurt.")
d29 = Description.create(instruction: "Press your body back up once the top of your head grazes the floor by extending your arms. Think of pressing into the floor as if you were pressing a barbell over your head. Keep your core tight and engaged to prevent your spine from overextending.")
d30 = Description.create(instruction: "Extend your arms fully (lock out your elbows) at the top of the press and reset to descend for another rep. Don't rush into the next rep. Make sure you re-engage your core first.")


WorkoutDescription.create([
    { 
        workout_id: Workout.first.id,
        description_id: d1.id
    },
    { 
        workout_id: Workout.first.id,
        description_id: d2.id
    },
    { 
        workout_id: Workout.first.id,
        description_id: d3.id
    },
    { 
        workout_id: Workout.first.id,
        description_id: d4.id
    },
    { 
        workout_id: Workout.second.id,
        description_id: d5.id
    },
    { 
        workout_id: Workout.second.id,
        description_id: d6.id
    },
    { 
        workout_id: Workout.second.id,
        description_id: d7.id
    },
    { 
        workout_id: Workout.second.id,
        description_id: d8.id
    },
    { 
        workout_id: Workout.third.id,
        description_id: d9.id
    },
    { 
        workout_id: Workout.third.id,
        description_id: d10.id
    },
    { 
        workout_id: Workout.third.id,
        description_id: d11.id
    },
    { 
        workout_id: Workout.third.id,
        description_id: d12.id
    },
    { 
        workout_id: Workout.third.id,
        description_id: d13.id
    },
    { 
        workout_id: Workout.fourth.id,
        description_id: d14.id
    },
    { 
        workout_id: Workout.fourth.id,
        description_id: d15.id
    },
    { 
        workout_id: Workout.fourth.id,
        description_id: d16.id
    },
    { 
        workout_id: Workout.fourth.id,
        description_id: d17.id
    },
    { 
        workout_id: Workout.fourth.id,
        description_id: d18.id
    },
    { 
        workout_id: Workout.fourth.id,
        description_id: d19.id
    },
    { 
        workout_id: Workout.fifth.id,
        description_id: d20.id
    },
    { 
        workout_id: Workout.fifth.id,
        description_id: d21.id
    },
    { 
        workout_id: Workout.fifth.id,
        description_id: d22.id
    },
    { 
        workout_id: Workout.fifth.id,
        description_id: d23.id
    },
    { 
        workout_id: Workout.fifth.id,
        description_id: d24.id
    },
    { 
        workout_id: Workout.last.id,
        description_id: d25.id
    }, 
    { 
        workout_id: Workout.last.id,
        description_id: d26.id
    },
    { 
        workout_id: Workout.last.id,
        description_id: d27.id
    },
    { 
        workout_id: Workout.last.id,
        description_id: d28.id
    },
    { 
        workout_id: Workout.last.id,
        description_id: d29.id
    },
    { 
        workout_id: Workout.last.id,
        description_id: d30.id
    },
    ])

puts "Seeding done"

/* Define firestore reference for easy use in functions */
const db = firebase.firestore();

/* Update personal Highscore */
function update_highscore(alias, team) {
    const increment = firebase.firestore.FieldValue.increment(1);
    const storyRef = db.collection('highscores').doc(alias);
    storyRef.set({score: increment, alias: alias, team: team}, {merge: true});
}

/* Load the next book and corresponding recommendations */
function display_next_recommendations() {

    // Next Book
    n_book = 1;

    book_selected = evaluation_array.sort(() => Math.random() - Math.random()).slice(0, n_book);
    book_id = book_selected[0];

    // Next models
    n_models = 3;

    models_selected = models.sort(() => Math.random() - Math.random()).slice(0, n_models);

    // Next Model
    model_0_id = models_selected[0];
    model_1_id = models_selected[1];
    model_2_id = models_selected[2];

    // Random Rank of recommendation
    let recommendations = rank_array.sort(() => Math.random() - Math.random()).slice(0, 1);
    recommendation_rank = recommendations[0];

    // Retrieve recommendations model
    firebase.firestore().collection("recommendations").where("book_id", "==", book_id).where("model_id", "==", model_0_id).limit(1).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            if (recommendation_rank == "0") {
                recommendation_model_0 = doc.data().recommendation_1;
                console.log(0)
            };
            if (recommendation_rank == "1") {
                recommendation_model_0 = doc.data().recommendation_2;
                console.log(1)
            };
            if (recommendation_rank == "2") {
                recommendation_model_0 = doc.data().recommendation_3;
                console.log(2)
            };
            if (recommendation_rank == "3") {
                recommendation_model_0 = doc.data().recommendation_4;
                console.log(3)
            };
            if (recommendation_rank == "4") {
                recommendation_model_0 = doc.data().recommendation_5;
                console.log(4)
            };

            db.collection("books").where("itemID", "==", recommendation_model_0)
                .limit(1).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let recommendation_0_title = doc.data().title;
                    let recommendation_0_author = doc.data().author;
                    let recommendation_0_cover_url = doc.data().cover_url;
                    let recommendation_0_publisher = doc.data().publisher;
                    let recommendation_0_topic = doc.data().category_names;

                    document.getElementById("recommendation_0_title").innerHTML = recommendation_0_title;
                    document.getElementById("recommendation_0_author").innerHTML = recommendation_0_author;
                    document.getElementById("recommendation_0_publisher").innerHTML = recommendation_0_publisher;
                    document.getElementById("recommendation_0_topic").innerHTML = recommendation_0_topic;
                    document.getElementById("recommendation_0_image").src = recommendation_0_cover_url;
                });
            });
        });
    });

    db.collection("recommendations").where("book_id", "==", book_id)
        .where("model_id", "==", model_1_id).limit(1).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            if (recommendation_rank == 0) {
                recommendation_model_1 = doc.data().recommendation_1;
            };
            if (recommendation_rank == 1) {
                recommendation_model_1 = doc.data().recommendation_2;
            };
            if (recommendation_rank == 2) {
                recommendation_model_1 = doc.data().recommendation_3;
            };
            if (recommendation_rank == 3) {
                recommendation_model_1 = doc.data().recommendation_4;
            };
            if (recommendation_rank == 4) {
                recommendation_model_1 = doc.data().recommendation_5;
            };
            db.collection("books").where("itemID", "==", recommendation_model_1)
                .limit(1).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let recommendation_1_title = doc.data().title;
                    let recommendation_1_author = doc.data().author;
                    let recommendation_1_cover_url = doc.data().cover_url;
                    let recommendation_1_publisher = doc.data().publisher;
                    let recommendation_1_topic = doc.data().category_names;

                    document.getElementById("recommendation_1_title").innerHTML = recommendation_1_title;
                    document.getElementById("recommendation_1_author").innerHTML = recommendation_1_author;
                    document.getElementById("recommendation_1_publisher").innerHTML = recommendation_1_publisher;
                    document.getElementById("recommendation_1_topic").innerHTML = recommendation_1_topic;
                    document.getElementById("recommendation_1_image").src = recommendation_1_cover_url;
                });
            });
        });
    });

    db.collection("recommendations").where("book_id", "==", book_id)
        .where("model_id", "==", model_2_id).limit(1).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {

            if (recommendation_rank == 0) {
                recommendation_model_2 = doc.data().recommendation_1;
            };
            if (recommendation_rank == 1) {
                recommendation_model_2 = doc.data().recommendation_2;
            };
            if (recommendation_rank == 2) {
                recommendation_model_2 = doc.data().recommendation_3;
            };
            if (recommendation_rank == 3) {
                recommendation_model_2 = doc.data().recommendation_4;
            };
            if (recommendation_rank == 4) {
                recommendation_model_2 = doc.data().recommendation_5;
            };
            db.collection("books").where("itemID", "==", recommendation_model_2)
                .limit(1).get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let recommendation_2_title = doc.data().title;
                    let recommendation_2_author = doc.data().author;
                    let recommendation_2_cover_url = doc.data().cover_url;
                    let recommendation_2_publisher = doc.data().publisher;
                    let recommendation_2_topic = doc.data().category_names;

                    document.getElementById("recommendation_2_title").innerHTML = recommendation_2_title;
                    document.getElementById("recommendation_2_author").innerHTML = recommendation_2_author;
                    document.getElementById("recommendation_2_publisher").innerHTML = recommendation_2_publisher;
                    document.getElementById("recommendation_2_topic").innerHTML = recommendation_2_topic;
                    document.getElementById("recommendation_2_image").src = recommendation_2_cover_url;
                });
            });
        });
    });


    // Retrieve information about the book and the recommendations
    db.collection("books").where("itemID", "==", book_id)
        .limit(1).get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            let book_title = doc.data().title;
            let book_author = doc.data().author;
            let book_cover_url = doc.data().cover_url;
            let book_publisher = doc.data().publisher;
            let book_topic = doc.data().category_names;

            document.getElementById("book_title").innerHTML = book_title;
            document.getElementById("book_author").innerHTML = book_author;
            document.getElementById("book_publisher").innerHTML = book_publisher;
                    document.getElementById("book_topic").innerHTML = book_topic;
            document.getElementById("book_image").src = book_cover_url;
        });
    });
};


/* Update model scores */
function update_model_counts(choice) {
    const increment = firebase.firestore.FieldValue.increment(1);

    const model0Ref = db.collection('model_scores').doc(model_0_id);
    const model1Ref = db.collection('model_scores').doc(model_1_id);
    const model2Ref = db.collection('model_scores').doc(model_2_id);

    model0Ref.set({appearances: increment}, {merge: true});
    model1Ref.set({appearances: increment}, {merge: true});
    model2Ref.set({appearances: increment}, {merge: true});

    if (choice == "recommendation_0") {
        model0Ref.set({chosen: increment}, {merge: true});
    }
    ;
    if (choice == "recommendation_1") {
        model1Ref.set({chosen: increment}, {merge: true});
    }
    ;
    if (choice == "recommendation_2") {
        model2Ref.set({chosen: increment}, {merge: true});
    }
    ;
};


/* Send data to database and execute function update_highscore and function display_next_recommendations */
function choice_recommendation(choice) {
    // receive name data
    alias = document.getElementById("alias").value;
    team = document.getElementById("team").value;

    db.collection("decisions").doc().set({
        alias: alias,
        team: team,
        book_id: book_id,
        decision: choice,
        model_0_id: model_0_id,
        model_1_id: model_1_id,
        model_2_id: model_2_id,
        recommendation_shown_0: recommendation_model_0,
        recommendation_shown_1: recommendation_model_1,
        recommendation_shown_2: recommendation_model_2,
        time: firebase.firestore.FieldValue.serverTimestamp()
    });

    update_highscore(alias, team);
    update_model_counts(choice);
    display_next_recommendations();
};

// Initialize global variable
let model_0_id;
let model_1_id;
let model_2_id;
let alias;
let team;
let choice;
let recommendation_model_0;
let recommendation_model_1;
let recommendation_model_2;
let recommendation_rank;
let evaluation_array = [12,45274,10104,41371,14015,28515,70766,1822,56794,60188,62060,31401,6420,72855,73378,25049,24603,5737,38980,13382,75121,39779,14026,9392,77956,70300,77134,75340,51066,67776,53929,22342,41116,60331,65307,50039,42184,76163,2319,62494,31015,21497,53008,39308,4690,19777,10078,65353,58847,61593,18537,73427,7521,71586,13772,33092,74398,74089,57282,38760,15657,17665,75251,56282,73973,19994,47098,54190,61043,78675,40394,43844,27300,22870,61707,17888,48292,2054,6643,3857,64350,10833,33556,23256,53880,75694,17770,9365,11177,48659,18169,48490,70627,40000,18665,35574,11732,6798,42415,64236,60644,11595,39957,1519,10075,25209,7108,67848,40424,72523,60588,21315,50356,75904,17240,24218,21949,6478,76242,71112,76437,52656,10304,25399,71619,31439,14323,10842,39515,59732,56452,53496,27903,53672,29813,67909,36620,44197,68772,72058,17921,67832,73203,30873,46059,49615,76629,55488,30713,3527,52884,48270,18224,39309,11265,8288,40312,35418,78181,8859,3875,17348,37321,22277,52705,26856,36095,66497,55326,3959,66928,23159,76762,73748,8248,39766,49234,23366,59734,41020,74389,8538,40113,32980,47068,20083,31728,52192,62732,30746,22622,54612,59032,26385,65461,54835,54737,76905,45093,31273,851,16935,28379,17009,1486,62630,34682,6741,20852,22265,2244,26396,48796,45501,26445,457,35752,47491,43762,23599,13325,3273,2257,34670,74105,35720,71526,21737,7860,41648,1640,33814,19717,78998,23643,68712,63739,42328,23446,21285,72959,8548,21221,12564,9577,29381,19688,45195,22775,13131,8861,1680,62200,73868,7666,7084,74586,2335,22877,68509,28737,66339,49803,14189,9884,67630,11407,8384,75345,45841,63764,70197,32109,30434,45358,52721,58820,70803,50338,66493,52519,37378,49952,75882,7445,17850,42566,29708,46476,14470,43679,40279,24002,68253,15581,73552,38164,58779,57464,56827,76331,12568,63107,39971,24776,65811,77175,53717,50340,77554,63279,59821,12725,1235,34899,37797,29368,11378,59092,5362,47933,68560,57628,11682,18601,58566,29217,64901,6359,54801,66017,28302,19235,24078,7924,2993,71202,38543,9943,24706,17298,49279,7129,54586,55270,16937,44508,28976,9612,43313,46237,14883,71036,71886,70372,14750,52053,51638,61875,42039,25598,23417,30446,27104,61715,72826,7415,11688,12209,79016,6019,14436,75422,10482,24686,50313,58067,37854,24118,66750,8116,62540,25663,16585,28466,42531,39680,51560,13374,18441,13880,17383,13014,57674,18756,51964,27403,10871,35456,74872,63796,63457,55057,47336,43032,63855,72231,11527,31548,62812,20266,59605,57163,34307,65903,28580,5197,34939,59859,12077,75539,24979,47684,37711,14162,30806,65785,2723,52874,2612,63908,12075,78080,39083,64333,12640,41002,27038,38637,44894,35904,38819,30628,6790,38368,27726,4890,37429,57598,44452,77629,44327,21276,46655,35579,56629,47549,31827,41447,57018,69755,16190,48231,58737,9001,19462,15267,68076,17617,43701,66224,23132,23535,18479,63017,61316,56775,66954,32532,53813,43877,34078,58561,77952,34978,337,25367,35094,24459,10745,59769,54929,78279,62535,3268,663,32451,21607,46904,58236,25488,58262,38083,3059,49587,32126,48127,59649,17465,53838,37146,40692,53134,10841,11169,68764,57342,11603,69838,37998,35898,51042,44118,67506,636,2579,45286,18427,28844,65714,24554,36175,72138,45594,24747,26662,33525,8296,56597,61794,27261,468,29448,726,55154,7977,53078,34125,71063,67063,47597,52305,65833,5733,33494,10881,74196,22160,70190,16191,6363,51060,41219,53100,45871,29083,61636,42715,32754,72607,6955,2399,60216,26438,57977,47675,51832,29972,33790,45390,11609,73256,20740,24746,33956,11253,5255,24675,58404,47464,39665,18622,54066,30229,71353,14037,71784,46951,61514,27259,45613,22972,45435,62993,64509,46931,65465,60384,31881,67229,58605,6530,43304,21179,28853,47632,15039,72722,45270,61339,48791,32110,33558,21639,47838,78241,6413,27334,3425,29779,45827,39627,39590,1103,74813,39000,10434,18320,47893,10426,9179,58906,51702,35470,30816,69589,8109,62276,64534,5300,54461,10326,1071,20234,4525,62509,39941,3583,35236,42326,22868,28533,61752,45955,3166,1168,259,60087,12311,66633,65860,52748,35638,23349,30313,5498,45424,15472,13056,14122,50582,38840,63023,8516,47014,49396,75774,13180,16340,78314,1460,38005,42622,38523,74041,37011,6288,62728,15949,15715,10097,66177,16746,18879,7655,53378,15167,33517,2975,62454,51133,71805,67073,77384,5844,52718,15767,45935,2142,31637,31129,76150,75867,24085,13973,70180,77574,62162,40017,49479,9036,14314,54145,36939,13269,24486,31685,55613,10307,31085,12152,1399,47621,77524,72017,68427,45238,1777,64596,53660,53793,53003,30144,59985,5384,70911,54790,66903,49099,35947,18424,1177,25513,56477,19649,28731,35048,47192,56453,56939,18904,44025,9012,5892,5119,19874,41477,45068,61261,52685,21281,61125,45116,15854,46634,4272,39508,13970,9626,6341,26222,17998,51002,70026,4089,56945,56300,29536,67085,8318,50701,39906,20388,48054,28013,72242,69407,67382,48584,38197,3696,22940,66319,37531,47302,64237,60983,687,51599,12519,8268,45732,29948,24087,24667,9197,31571,71698,43672,72088,53393,38254,27491,7028,56180,10324,51443,65088,45487,7201,3031,52727,66360,70707,60250,70223,12103,29580,3472,66315,58455,9424,56705,54338,70923,41422,23087,60594,59102,70997,15861,8542,38964,8208,1954,4822,26113,12970,9891,65669,26379,30725,55501,49738,77676,16801,61475,51600,33303,39498,46052,72969,14895,69233,19801,65557,78480,20547,47002,41580,23706,8498,53475,2074,75295,39076,59879,51540,40362,73789,76368,22313,11550,73200,21536,56475,27237,59970,66324,56170,61750,78486,22231,56175,36526,72777,51818,78303,54090,58865,28493,39201,3523,26764,10587,27590,14640,30239,25987,50899,38664,64339,36157,67219,26971,59750,14318,35892,23226,78680,60056,68759,61909,62464,39864,4120,71863,67953,14782,55221,13755,66040,22353,11485,10789,63891,49179,817,25157,41090,77200,66568,45173,20399,76916,63103,64517,47988,44662,76645,62115,62234,36826,29916,8728,30372,17138,40812,28381,37563,42158,36959,30622,56782,44214,50648,37731,22963,24740,2706,58358,9569,50163,5357,23570,78384,68157,44964,12971,41078];
let n_book;
let book_selected;
let book_id;
let models = ["first", "model_2", "team404_base_model", "teamfivemodel", "Hybrid_MeanAllClassifiers"];
let n_models;
let models_selected;
let rank_array = ["0", "1","2","3","4"];

// Initialize images
display_next_recommendations()
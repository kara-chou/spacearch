//zoom events for layer navigation
window.addEventListener("wheel", (e) => {
    console.log("wheel");
    e.preventDefault();

    // Zooming out, leads to layer 2
    if (e.deltaX < 0 || e.deltaY < 0) {
        window.location.href = 'layer2.html';
    }
}, { passive: false });

/*Define content for each box upon clicking, CHANGE EXPLANATION TEXTS HERE*/
var boxContents = {
    selection: {
        title: "Selection", 
        explanation: 
            "Astronaut selection was originally carried out by NASA and the Soviet Space Program, and now Japan, China, Russia, Brazil, and countries in Europe have selected their own astronauts [NASA 2024]. Due to historical and sociopolitical factors, only male candidates were originally allowed to become astronauts, with one exception in the early 1960s (Valentina Tereshkova, USSR). Female candidates were accepted regularly in the 1980s, although still comprise a minority of the program [Steimle and Norberg 2013]."
    },
    individual_traits:{
        title: "individual traits",
        explanation: "Explanation for individual traits"
    },
    loss_of_mission: {
        title: "Loss of Mission",
        explanation: "Explanation for Loss of Mission."
    },
    loss_of_crew_life: {
        title: "Loss of Crew Life",
        explanation: "Explanation for Loss of Crew Life."
    },
    quality_of_life: {
        title: "Quality of Life",
        explanation: "Explanation for Quality of Life."
    },
    distance_from_earth:{
        title: "Distance From Earth",
        explanation: "Explanation for Distance from Earth."
    },
    mission_duration:{
        title: "Mission Duration",
        explanation: "Explanations."
    },
    communication_delay:{
        title: "Communication Delay",
        explanation: "Explanations."
    },
    isolated:{
        title: "Isolated",
        explanation: "Explanations."
    },
    confined:{
        title: "Confined",
        explanation: "Explanations."
    },
    extreme:{
        title: "Extreme",
        explanation: "Explanations."
    },
    resource_constrained:{
        title: "Resource Constrained",
        explanation: "Explanations."
    },
    mission_demands:{
        title: "Mission Demands",
        explanation: "Explanations."
    },
    mission_events:{
        title: "Mission Events",
        explanation: "Explanations."
    },
    crew_size:{
        title: "Crew Size",
        explanation: "Explanations."
    },
    social_support:{
        title: "Social Support",
        explanation: "Explanations."
    },
    social_density:{
        title: "Social Density",
        explanation: "Explanations."
    },
    social_monotony:{
        title: "Social Monotony",
        explanation: "Explanations."
    },
    group_living:{
        title: "Group living",
        explanation: "Explanations."
    },
    extraversion:{
        title: "Extraversion",
        explanation: "Explanations."
    },
    agreeableness:{
        title: "Agreeableness",
        explanation: "Explanations."
    },
    neuroticism:{
        title: "Neuroticism",
        explanation: "Explanations."
    },
    resilience:{
        title: "Resilience",
        explanation: "Explanations."
    },
    openness:{
        title: "Openness",
        explanation: "Explanations."
    },
    conscientiousness:{
        title: "Conscientiousness",
        explanation: "Explanations."
    },
    emotional_bandwidth:{
        title: "Emotional Bandwidth",
        explanation: "Explanations."
    },
    genetics:{
        title: "Genetics",
        explanation: "Explanations."
    },
    psychological_resources:{
        title: "psychological_resources",
        explanation: "Explanations."
    },
    training_and_preperation:{
        title: "Training and Preperation",
        explanation: "Explanations."
    },
    ground_support:{
        title: "Ground Support",
        explanation: "Explanations."
    },
    medical_resources:{
        title: "Medical Resources",
        explanation: "Explanations."
    },
    family_and_friends:{
        title: "Family and Friends",
        explanation: "Explanations."
    },
    supplies:{
        title: "Supplies",
        explanation: "Explanations."
    },
    food:{
        title: "Food",
        explanation: "Explanations."
    },
    exercise_equipment:{
        title: "Exercise Equipment",
        explanation: "Explanations."
    },
    physical_ergonomics:{
        title: "Physical Ergonomics",
        explanation: "Explanations."
    },
    circulation_paths:{
        title: "Circulation Paths",
        explanation: "Explanations."
    },
    privacy:{
        title: "Privacy",
        explanation: "Explanations."
    },
    lighting:{
        title: "lighting",
        explanation: "Explanations."
    },
    environmental_monotony:{
        title: "Environmental Monotony",
        explanation: "Explanations."
    },
    layout:{
        title: "Layout",
        explanation: "Explanations."
    },
    reconfigurability:{
        title: "reconfigurability",
        explanation: "Explanations."
    },
    fixtures:{
        title: "Fixtures",
        explanation: "Explanations."
    },
    light_dark_cycles:{
        title: "Light/Dark Cycles",
        explanation: "Explanations."
    },
    altered_gravity:{
        title: "Altered Gravity",
        explanation: "Explanations."
    },
    atmosphere:{
        title: "Atmosphere",
        explanation: "Explanations."
    },
    radiation:{
        title: "Radiation",
        explanation: "Explanations."
    },
    environmental_control:{
        title: "Environmental Control",
        explanation: "Explanations."
    },
    habitable_volume:{
        title: "Habitable Volume",
        explanation: "Explanations."
    },
    acoustics:{
        title: "Temperature/Humidity",
        explanation: "Explanations."
    },
    nutrition:{
        title: "Nutrition",
        explanation: "Explanations."
    },
    physical_workload:{
        title: "Physical Workload",
        explanation: "Explanations."
    },
    cognitive_workload:{
        title: "Cognitive Workload",
        explanation: "Explanations."
    },
    media_attention:{
        title: "Media Attention",
        explanation: "Explanations."
    },
    conflicts:{
        title: "Conflicts",
        explanation: "Explanations."
    },
    injuries:{
        title: "Injuries",
        explanation: "Explanations."
    },
    transition_processes:{
        title: "Transition Processes",
        explanation: "Explanations."
    },
    action_processes:{
        title: "Action Processes",
        explanation: "Explanations."
    },
    interpersonal_processes:{
        title: "interpersonal Processes",
        explanation: "Explanations."
    },
    stress_regulation:{
        title: "Stress Regulation",
        explanation: "Explanations."
    },
    placemaking:{
        title: "Placemaking",
        explanation: "Explanations."
    },
    sleep:{
        title: "Sleep",
        explanation: "Explanations."
    },
    cognitive_function:{
        title: "Physical Health",
        explanation: "Explanations."
    },
    sleep_quality:{
        title: "Sleep Quality",
        explanation: "Explanations."
    },
    anxiety:{
        title: "Anxiety",
        explanation: "Explanations."
    },
    agency:{
        title: "Agency",
        explanation: "Explanations."
    },
    stress:{
        title: "Stress",
        explanation: "Explanations."
    },
    crew_performance:{
        title: "Crew Performance",
        explanation: "Explanations."
    },
    attachment:{
        title: "Attachment",
        explanation: "Explanations."
    },
    trust:{
        title: "Trust",
        explanation: "Explanations."
    },
    curiosity:{
        title: "Curiosity",
        explanation: "Explanations."
    },
    kinship:{
        title: "Kinship",
        explanation: "Explanations."
    },
    boredom:{
        title: "Boredom",
        explanation: "Explanations."
    },
    tranquility:{
        title: "Tranquility",
        explanation: "Explanations."
    },
    discontentment:{
        title: "Discontentment",
        explanation: "Explanations."
    },
    nostalgia:{
        title: "Nostalgia Homesickness",
        explanation: "Explanations."
    },
    fear:{
        title: "Fear",
        explanation: "Explanations."
    },
    awe:{
        title: "Awe",
        explanation: "Explanations."
    },
    depression:{
        title: "Depression",
        explanation: "Explanations."
    },
};

/*Define content for each box upon clicking, CHANGE EXPLANATION TEXTS HERE*/
var relatedBoxContents = {
    selection: {
        title: "Selection (related to ...)",
        explanation: "Explanation for Selection"
    },
    individual_traits:{
        title: "individual traits (related to ...)",
        explanation: "Explanation for individual traits"
    },
    loss_of_mission: {
        title: "Loss of Mission (related to ...)",
        explanation: "Explanation for Loss of Mission."
    },
    loss_of_crew_life: {
        title: "Loss of Crew Life (related to ...)",
        explanation: "Explanation for Loss of Crew Life."
    },
    quality_of_life: {
        title: "Quality of Life (related to ...)",
        explanation: "Explanation for Quality of Life."
    },
    distance_from_earth_communication_delay:{
        title: "How distance from Earth results in communication delay",
        explanation: "During a lunar mission, a communication delay of 5-14 second is expected [Parisi 2023]. During a Mars surface mission, depending on the relative positions of the Earth and Mars, a roundtrip communication delay is approximately 6.5 to 44 minutes [Schuster 2007]."
    },
    distance_from_earth_isolated:{
        title: "How distance from Earth results in isolation",
        explanation: "As the distance from Earth increases, Earth will disappear into the background of space, termed the ‘Earth-out-of-view phenomenon’. Along with the awareness of the impossibility of rapid return and confinement as the only option during the whole mission, these psychological factors will increase the sense of isolation [Musso 2018]."
    },
    distance_from_earth_resource_constrained:{
        title: "How distance from Earth results in constrained resources",
        explanation: "When moving from home (migration, relocation, immigration), refugees and immigrants face challenges such as language difficulties, rejection of qualifications, limitation of personal resources, and barriers to social support [Stewart 2008][Faret 2021]. The current space mission paradigm is to bring all resources (consumable and non-consumable) from Earth. Increased distance, such as the one from Mars to Earth, creates logistical and cost difficulties [Sullivan and McKay 1991]. Solutions such as regenerative systems and in-situ resource utilization have been proposed [Pickett 2020][Starr 2020]."
    },
    mission_duration_isolated:{
        title: "How mission duration results in isolation",
        explanation: "Not only does increased mission duration limit the amount of contact with usual sources of support, prolonged isolation can decrease the perceived quality and satisfaction of support, even when readily available [Palinkas 2004]."
    },
    mission_duration_boredom:{
        title: "How mission duration results in boredom",
        explanation: "During a study of a crew of 6 in isolation for 520 days, crew sedentariness increased over the mission as captured by actigraphy (motion data) [Basner 2013]."
    },
    communication_delay:{
        title: "Communication Delay (related to ...)",
        explanation: "Explanations."
    },
    isolated:{
        title: "Isolated (related to ...)",
        explanation: "Explanations."
    },
    confined:{
        title: "Confined (related to ...)",
        explanation: "Explanations."
    },
    extreme:{
        title: "Extreme (related to ...)",
        explanation: "Explanations."
    },
    resource_constrained:{
        title: "Resource Constrained (related to ...)",
        explanation: "Explanations."
    },
    mission_demands:{
        title: "Mission Demands (related to ...)",
        explanation: "Explanations."
    },
    mission_events:{
        title: "Mission Events (related to ...)",
        explanation: "Explanations."
    },
    crew_size:{
        title: "Crew Size (related to ...)",
        explanation: "Explanations."
    },
    social_support:{
        title: "Social Support (related to ...)",
        explanation: "Explanations."
    },
    social_density:{
        title: "Social Density (related to ...)",
        explanation: "Explanations."
    },
    social_monotony:{
        title: "Social Monotony (related to ...)",
        explanation: "Explanations."
    },
    group_living:{
        title: "Group living (related to ...)",
        explanation: "Explanations."
    },
    extraversion:{
        title: "Extraversion (related to ...)",
        explanation: "Explanations."
    },
    agreeableness:{
        title: "Agreeableness (related to ...)",
        explanation: "Explanations."
    },
    neuroticism:{
        title: "Neuroticism (related to ...)",
        explanation: "Explanations."
    },
    resilience:{
        title: "Resilience (related to ...)",
        explanation: "Explanations."
    },
    openness:{
        title: "Openness (related to ...)",
        explanation: "Explanations."
    },
    conscientiousness:{
        title: "Conscientiousness (related to ...)",
        explanation: "Explanations."
    },
    emotional_bandwidth:{
        title: "Emotional Bandwidth (related to ...)",
        explanation: "Explanations."
    },
    genetics:{
        title: "Genetics (related to ...)",
        explanation: "Explanations."
    },
    psychological_resources:{
        title: "psychological_resources (related to ...)",
        explanation: "Explanations."
    },
    training_and_preperation:{
        title: "Training and Preperation (related to ...)",
        explanation: "Explanations."
    },
    ground_support:{
        title: "Ground Support (related to ...)",
        explanation: "Explanations."
    },
    medical_resources:{
        title: "Medical Resources (related to ...)",
        explanation: "Explanations."
    },
    family_and_friends:{
        title: "Family and Friends (related to ...)",
        explanation: "Explanations."
    },
    supplies:{
        title: "Supplies (related to ...)",
        explanation: "Explanations."
    },
    food:{
        title: "Food (related to ...)",
        explanation: "Explanations."
    },
    exercise_equipment:{
        title: "Exercise Equipment (related to ...)",
        explanation: "Explanations."
    },
    physical_ergonomics:{
        title: "Physical Ergonomics (related to ...)",
        explanation: "Explanations."
    },
    circulation_paths:{
        title: "Circulation Paths (related to ...)",
        explanation: "Explanations."
    },
    privacy:{
        title: "Privacy (related to ...)",
        explanation: "Explanations."
    },
    lighting:{
        title: "lighting (related to ...)",
        explanation: "Explanations."
    },
    environmental_monotony:{
        title: "Environmental Monotony (related to ...)",
        explanation: "Explanations."
    },
    layout:{
        title: "Layout (related to ...)",
        explanation: "Explanations."
    },
    reconfigurability:{
        title: "reconfigurability (related to ...)",
        explanation: "Explanations."
    },
    fixtures:{
        title: "Fixtures (related to ...)",
        explanation: "Explanations."
    },
    light_dark_cycles:{
        title: "Light/Dark Cycles (related to ...)",
        explanation: "Explanations."
    },
    altered_gravity:{
        title: "Altered Gravity (related to ...)",
        explanation: "Explanations."
    },
    atmosphere:{
        title: "Atmosphere (related to ...)",
        explanation: "Explanations."
    },
    radiation:{
        title: "Radiation (related to ...)",
        explanation: "Explanations."
    },
    environmental_control:{
        title: "Environmental Control (related to ...)",
        explanation: "Explanations."
    },
    habitable_volume:{
        title: "Habitable Volume (related to ...)",
        explanation: "Explanations."
    },
    acoustics:{
        title: "Temperature/Humidity (related to ...)",
        explanation: "Explanations."
    },
    nutrition:{
        title: "Nutrition (related to ...)",
        explanation: "Explanations."
    },
    physical_workload:{
        title: "Physical Workload (related to ...)",
        explanation: "Explanations."
    },
    cognitive_workload:{
        title: "Cognitive Workload (related to ...)",
        explanation: "Explanations."
    },
    media_attention:{
        title: "Media Attention (related to ...)",
        explanation: "Explanations."
    },
    conflicts:{
        title: "Conflicts (related to ...)",
        explanation: "Explanations."
    },
    injuries:{
        title: "Injuries (related to ...)",
        explanation: "Explanations."
    },
    transition_processes:{
        title: "Transition Processes (related to ...)",
        explanation: "Explanations."
    },
    action_processes:{
        title: "Action Processes (related to ...)",
        explanation: "Explanations."
    },
    interpersonal_processes:{
        title: "interpersonal Processes (related to ...)",
        explanation: "Explanations."
    },
    stress_regulation:{
        title: "Stress Regulation (related to ...)",
        explanation: "Explanations."
    },
    placemaking:{
        title: "Placemaking (related to ...)",
        explanation: "Explanations."
    },
    sleep:{
        title: "Sleep (related to ...)",
        explanation: "Explanations."
    },
    cognitive_function:{
        title: "Physical Health (related to ...)",
        explanation: "Explanations."
    },
    sleep_quality:{
        title: "Sleep Quality (related to ...)",
        explanation: "Explanations."
    },
    anxiety:{
        title: "Anxiety (related to ...)",
        explanation: "Explanations."
    },
    agency:{
        title: "Agency (related to ...)",
        explanation: "Explanations."
    },
    stress:{
        title: "Stress (related to ...)",
        explanation: "Explanations."
    },
    crew_performance:{
        title: "Crew Performance (related to ...)",
        explanation: "Explanations."
    },
    attachment:{
        title: "Attachment (related to ...)",
        explanation: "Explanations."
    },
    trust:{
        title: "Trust (related to ...)",
        explanation: "Explanations."
    },
    curiosity:{
        title: "Curiosity (related to ...)",
        explanation: "Explanations."
    },
    kinship:{
        title: "Kinship (related to ...)",
        explanation: "Explanations."
    },
    boredom:{
        title: "Boredom (related to ...)",
        explanation: "Explanations."
    },
    tranquility:{
        title: "Tranquility (related to ...)",
        explanation: "Explanations."
    },
    discontentment:{
        title: "Discontentment (related to ...)",
        explanation: "Explanations."
    },
    nostalgia:{
        title: "Nostalgia Homesickness (related to ...)",
        explanation: "Explanations."
    },
    fear:{
        title: "Fear (related to ...)",
        explanation: "Explanations."
    },
    awe:{
        title: "Awe (related to ...)",
        explanation: "Explanations."
    },
    depression:{
        title: "Depression (related to ...)",
        explanation: "Explanations."
    },
};

clickedBox = null;
document.addEventListener('DOMContentLoaded', function () {
    //Get all inner box elements
    var innerBoxes = document.querySelectorAll('.box div');

    //Format text to the desired format
    function formatToSmallBoxName(text) {
        tmp = text.trim().toLowerCase().replace(/\s+/g, '_');
        return tmp.replace(/\//g, "_");
    }

    function getRightBoxes(smallBoxName){
        switch(smallBoxName){
            case "selection":
                return ['selection']
            case 'individual_traits':
                return ['selection']
            case "distance_from_earth":
                return ['distance_from_earth', 'communication_delay', 'resource_constrained', 'isolated']
            case "mission_duration":
                return ['mission_duration', 'isolated', 'boredom']
            case "communication_delay":
                return ['communication_delay', 'ground_support', 'social_monotony','transition_processes']
            case "isolated":
                return ['isolated', 'social_monotony', 'ground_support', 'cognitive_function']
            case "confined":
                return ['confined', 'social_monotony', 'privacy']
            case "extreme":
                return ['extreme', 'genetics', 'resource_constrained', 'altered_gravity', 'radiation']
            case "resource_constrained":
                return ['resource_constrained', 'supplies','food']
            case "mission_demands":
                return ['mission_demands', 'cognitive_workload', 'physical_workload']
            case "mission_events":
                return ['mission_events', 'stress', 'physical_workload']
            case "crew_size":
                return ['crew_size', 'social_density']
             case "social_support":
                return ['social_support', 'stress_regulation', 'cognitive_function', 'kinship']
            case "social_monotony":
                return ['social_monotony', 'boredom']
            case "social_density":
                return ['social_density', 'privacy', 'stress_regulation']
            case "group_living":
                return ['group_living', 'interpersonal_processes', 'kinship']
            case "extraversion":
                return ['extraversion', 'interpersonal_processes', 'social_support', 'nostalgia','group_living']
            case "openness":
                return ['openness', 'curiosity']
            case "agreeableness":
                return ['agreeableness', 'interpersonal_processes', 'group_living']
            case "neuroticism":
                return ['neuroticism', 'anxiety', 'depression', 'interpersonal_processes', 'stress','nostalgia','group_living']
            case "conscientiousness":
                return ['conscientiousness', 'crew_performance', 'cognitive_function', 'action_processes']
            case "genetics":
                return ['genetics', 'cognitive_function', 'extraversion', 'agreeableness', 'neuroticism']
            case "resilience":
                return ['resilience', 'stress_regulation']
            case "emotional_bandwidth":
                return ['emotional_bandwidth', 'stress_regulation', 'social_support', 'depression', 'anxiety', 'discontentment', 'stress', 'interpersonal_processes', 'kinship']
            case "psychological_resources":
                return ['psychological_resources', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "training_and_preperation":
                return ['training_and_preperation', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "ground_support":
                return ['ground_support', 'family_and_friends', 'psychological_resources', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "medical_resources":
                return ['medical_resources', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "family_and_friends":
                return ['family_and_friends', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "supplies":
                return ['supplies', 'medical_resources', 'exercise_equipment', 'fixtures', 'food', 'cognitive_function', 'environmental_monotony', 'physical_workload', 'social_monotony', 'nutrition', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'boredom', 'stress_regulation', 'interpersonal_processes', 'discontentment', 'kinship']
            case "food":
                return ['food', 'nutrition', 'environmental_monotony', 'sleep', 'cognitive_function', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress', 'discontentment']
            case "exercise_equipment":
                return ['exercise_equipment', 'physical_workload', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "light_dark_cycles":
                return ['light_dark_cycles', 'sleep']
            case "altered_gravity":
                return ['altered_gravity', 'physical_health']
            case "radiation":
                return ['radiation', 'physical_health']
            case "atmosphere":
                return ['atmosphere', 'sleep', 'crew_performance']
            case "acoustics":
                return ['acoustics', 'sleep', 'crew_performance']
            case "nutrition":
                return ['nutrition', 'physical_health']
            case "habitable_volume":
                return ['habitable_volume', 'privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "environmental_control":
                return ['environmental_control', 'physical_ergonomics', 'sleep', 'cognitive_function', 'acoustics', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress', 'environmental_monotony', 'boredom', 'stress_regulation', 'discontentment']
            case "circulation_paths":
                return ['circulation_paths', 'reconfigurability', 'group_living', 'placemaking', 'interpersonal_processes', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment', 'kinship']
            case "layout":
                return ['layout', 'reconfigurability', 'circulation_paths', 'placemaking', 'group_living', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment', 'interpersonal_processes', 'kinship']
            case "lighting":
                return ['lighting', 'privacy', 'habitable_volume', 'physical_ergonomics', 'layout', 'placemaking', 'sleep', 'stress_regulation', 'cognitive_function', 'acoustics', 'reconfigurability', 'circulation_paths', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress', 'tranquility', 'environmental_monotony', 'group_living', 'boredom', 'interpersonal_processes', 'kinship']
            case "privacy":
                return ['privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "physical_ergonomics":
                return ['physical_ergonomics', 'cognitive_function', 'acoustics', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'environmental_monotony', 'boredom', 'stress_regulation', 'discontentment']
            case "fixtures":
                return ['fixtures', 'social_monotony', 'interpersonal_processes', 'kinship']
            case "reconfigurability":
                return ['reconfigurability', 'placemaking', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment']
            case "environmental_monotony":
                return ['environmental_monotony', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "physical_workload":
                return ['physical_workload', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "cognitive_workload":
                return ['cognitive_workload', 'stress_regulation', 'sleep', 'depression', 'anxiety', 'discontentment', 'stress', 'sleep_quality']
            case "media_attention":
                return ['media_attention', 'privacy', 'cognitive_workload', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "conflicts":
                return ['conflicts', 'interpersonal_processes', 'action_processes', 'kinship', 'crew_performance']
            case "injuries":
                return ['injuries', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "transition_processes":
                return ['transition_processes', 'crew_performance']
            case "action_processes":
                return ['action_processes', 'crew_performance']
            case "interpersonal_processes":
                return ['interpersonal_processes', 'crew_performance', 'kinship']
            case "stress_regulation":
                return ['stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "placemaking":
                return ['placemaking', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment']
            case "sleep":
                return ['sleep', 'depression', 'anxiety', 'sleep_quality']
            case "cognitive_function":
                return ['cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "sleep_quality":
                return ['sleep_quality']
            case "anxiety":
                return ['anxiety']
            case "agency":
                return ['agency']
            case "stress":
                return ['stress']
            case "crew_performance":
                return ['crew_performance']
            case "attachment":
                return ['attachment']
            case "trust":
                return ['trust']
            case "curiosity":
                return ['curiosity']
            case "kinship":
                return ['kinship']
            case "boredom":
                return ['boredom']
            case "tranquility":
                return ['tranquility']
            case "discontentment":
                return ['discontentment']
            case "nostalgia":
                return ['nostalgia']
            case "fear":
                return ['fear']
            case "awe":
                return ['awe']
            case "depression":
                return ['depression']
            default:
                return []
        }
    }

    //All boxes the current one is related to, left and right
    function getRelatedBoxes(smallBoxName) {
        switch (smallBoxName) {
            case 'selection':
                return ['selection']
            case 'individual_traits':
                return ['selection']
            case 'distance_from_earth':
                return ['distance_from_earth', 'communication_delay', 'resource_constrained', 'isolated']
            case 'mission_duration':
                return ['mission_duration', 'isolated', 'boredom']
            case 'communication_delay':
                return ['communication_delay', 'ground_support', 'social_monotony','transition_processes', 'distance_from_earth']
            case "isolated":
                return ['isolated', 'social_monotony', 'ground_support', 'cognitive_function', 'distance_from_earth', 'mission_duration','extreme']
            case "confined":
                return ['confined', 'social_monotony', 'privacy']
            case "extreme":
                return ['extreme', 'genetics', 'resource_constrained', 'altered_gravity', 'radiation']
            case "resource_constrained":
                return ['resource_constrained', 'supplies', 'food', 'distance_from_earth', 'extreme']
            case "mission_demands":
                return ['mission_demands', 'cognitive_workload', 'physical_workload']
            case 'mission_events':
                return ['mission_events', 'stress', 'physical_workload']
            case "crew_size":
                return ['crew_size', 'social_density']
            case "social_support":
                return ['social_support', 'stress_regulation', 'cognitive_function', 'kinship','interpersonal_process','extraversion']
            case "social_monotony":
                return ['social_monotony', 'boredom','communication_delay','confined','isolated']
            case "social_density":
                return ['social_density', 'privacy', 'stress_regulation','crew_size','habitable_volume']
            case "group_living":
                return ['group_living', 'interpersonal_processes', 'kinship']
            case "extraversion":
                return ['extraversion', 'interpersonal_processes', 'social_support', 'nostalgia','group_living','genetics']
            case "openness":
                return ['openness', 'curiosity']
            case "agreeableness":
                return ['agreeableness', 'interpersonal_processes', 'group_living','genetics']
            case "neuroticism":
                return ['neuroticism', 'anxiety', 'depression', 'interpersonal_processes', 'stress','nostalgia','group_living','genetics']
            case "conscientiousness":
                return ['conscientiousness', 'crew_performance', 'cognitive_function', 'action_processes']
            case "genetics":
                return ['genetics', 'cognitive_function', 'extraversion', 'agreeableness', 'neuroticism','extreme']
            case "resilience":
                return ['resilience', 'stress_regulation']
            case 'emotional_bandwidth':
                return ['emotional_bandwidth', 'stress_regulation', 'social_support', 'depression', 'anxiety', 'discontentment', 'stress', 'interpersonal_processes', 'kinship']
            case 'genetics':
                return ['genetics', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case 'resilience':
                return ['resilience', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "psychological_resources":
                return ['psychological_resources', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "training_and_preperation":
                return ['training_and_preperation', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "ground_support":
                return ['ground_support', 'family_and_friends', 'psychological_resources', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "medical_resources":
                return ['medical_resources', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "family_and_friends":
                return ['family_and_friends', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "supplies":
                return ['supplies', 'medical_resources', 'exercise_equipment', 'fixtures', 'food', 'cognitive_function', 'environmental_monotony', 'physical_workload', 'social_monotony', 'nutrition', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'boredom', 'stress_regulation', 'interpersonal_processes', 'discontentment', 'kinship']
            case "food":
                return ['food', 'nutrition', 'environmental_monotony', 'sleep', 'cognitive_function', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress', 'discontentment']
            case "exercise_equipment":
                return ['exercise_equipment', 'physical_workload', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "light_dark_cycles":
                return ['light_dark_cycles', 'sleep','extreme']
            case "altered_gravity":
                return ['altered_gravity', 'physical_health','extreme']
            case "radiation":
                return ['radiation', 'physical_health','extreme']
            case "atmosphere":
                return ['atmosphere', 'sleep', 'crew_performance','environmental_control']
            case "acoustics":
                return ['acoustics', 'sleep', 'crew_performance']
            case "nutrition":
                return ['nutrition', 'physical_health','food']
            case "habitable_volume":
                return ['habitable_volume', 'privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "environmental_control":
                return ['environmental_control', 'physical_ergonomics', 'sleep', 'cognitive_function', 'acoustics', 'depression', 'anxiety', 'sleep_quality', 'tranquility', 'stress', 'environmental_monotony', 'boredom', 'stress_regulation', 'discontentment']
            case "circulation_paths":
                return ['circulation_paths', 'reconfigurability', 'group_living', 'placemaking', 'interpersonal_processes', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment', 'kinship']
            case "layout":
                return ['layout', 'reconfigurability', 'circulation_paths', 'placemaking', 'group_living', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment', 'interpersonal_processes', 'kinship']
            case "lighting":
                return ['lighting', 'privacy', 'habitable_volume', 'physical_ergonomics', 'layout', 'placemaking', 'sleep', 'stress_regulation', 'cognitive_function', 'acoustics', 'reconfigurability', 'circulation_paths', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress', 'tranquility', 'environmental_monotony', 'group_living', 'boredom', 'interpersonal_processes', 'kinship']
            case "privacy":
                return ['privacy', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "physical_ergonomics":
                return ['physical_ergonomics', 'cognitive_function', 'acoustics', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'environmental_monotony', 'boredom', 'stress_regulation', 'discontentment']
            case "fixtures":
                return ['fixtures', 'social_monotony', 'interpersonal_processes', 'kinship']
            case "reconfigurability":
                return ['reconfigurability', 'placemaking', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment']
            case "environmental_monotony":
                return ['environmental_monotony', 'boredom', 'stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "physical_workload":
                return ['physical_workload', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "cognitive_workload":
                return ['cognitive_workload', 'stress_regulation', 'sleep', 'depression', 'anxiety', 'discontentment', 'stress', 'sleep_quality']
            case "media_attention":
                return ['media_attention', 'privacy', 'cognitive_workload', 'placemaking', 'sleep', 'stress_regulation', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment', 'depression', 'anxiety', 'sleep_quality', 'stress']
            case "conflicts":
                return ['conflicts', 'interpersonal_processes', 'action_processes', 'kinship', 'crew_performance']
            case "injuries":
                return ['injuries', 'cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "transition_processes":
                return ['transition_processes', 'crew_performance']
            case "action_processes":
                return ['action_processes', 'crew_performance', 'conscientiousness']
            case "interpersonal_processes":
                return ['interpersonal_processes', 'crew_performance', 'kinship','extraversion','agreeableness','neuroticism']
            case "stress_regulation":
                return ['stress_regulation', 'depression', 'anxiety', 'discontentment', 'stress']
            case "placemaking":
                return ['placemaking', 'trust', 'agency', 'discontentment', 'nostalgia', 'attachment']
            case "sleep":
                return ['sleep', 'depression', 'anxiety', 'sleep_quality']
            case "cognitive_function":
                return ['cognitive_function', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case "sleep_quality":
                return ['sleep_quality']
            case "anxiety":
                return ['anxiety']
            case "agency":
                return ['agency']
            case "stress":
                return ['stress']
            case "crew_performance":
                return ['crew_performance']
            case "attachment":
                return ['attachment']
            case "trust":
                return ['trust']
            case "curiosity":
                return ['curiosity']
            case "kinship":
                return ['kinship']
            case "boredom":
                return ['boredom']
            case "tranquility":
                return ['tranquility']
            case "discontentment":
                return ['discontentment']
            case "nostalgia":
                return ['nostalgia']
            case "fear":
                return ['fear']
            case "awe":
                return ['awe']
            case "depression":
                return ['depression']
            default:
                return [];
        }
    }
    
    var clickedarrows = [];
    var hoveredarrows = [];

    innerBoxes.forEach(function (innerBox) {
        innerBox.addEventListener('mouseenter', function () {
            if (clickedBox) { //hovering over a box related to the clicked box
                var relatedBoxes = getRelatedBoxes(clickedBox);
                var smallBoxName = formatToSmallBoxName(innerBox.textContent);
                if (relatedBoxes.includes(smallBoxName)) {
                    var explanationBox = document.querySelector('.explanation');
                    var clickedAndCurName = clickedBox + "_" + smallBoxName;
                    var content = relatedBoxContents[clickedAndCurName];
                    explanationBox.innerHTML = `<div class="box-content"><div class="box-title"><strong>${content.title}</strong></div><div class="box-explanation">${content.explanation}</div></div>`;
                }
            }else{ //when nothing is clicked, hover works on any box
                var smallBoxName = formatToSmallBoxName(innerBox.textContent);
                var explanationBox = document.querySelector('.explanation');
                var content = boxContents[smallBoxName];
                explanationBox.innerHTML = `<div class="box-content"><div class="box-title"><strong>${content.title}</strong></div><div class="box-explanation">${content.explanation}</div></div>`;
                var relatedBoxes = getRelatedBoxes(smallBoxName);                
                var rightBoxes = getRightBoxes(smallBoxName);
                innerBoxes.forEach(function (box) {
                        var relatedBox = formatToSmallBoxName(box.textContent);
                        var isRelated = relatedBoxes.includes(relatedBox);
                    
                        if (!isRelated) { //if not in related, then we need to grey it out
                            box.classList.add('greyed-out-hover');
                        }else{
                            if (relatedBox != smallBoxName){
                                if (rightBoxes.includes(relatedBox)){
                                    const arrow = arrowLine('.' + smallBoxName, '.' + relatedBox, { color: 'white' });
                                    hoveredarrows.push(arrow);
                                }else{
                                    const arrow = arrowLine('.' + relatedBox, '.' + smallBoxName, { color: 'white' });
                                    hoveredarrows.push(arrow);
                                }  
                            }
                        }
                });
            }
        });
        //remove arrows when boxes are unhovered (no clicking happened)
        innerBox.addEventListener('mouseleave', function(){ 
            innerBoxes.forEach(function (box) {
                box.classList.remove('greyed-out-hover');
            });
            hoveredarrows.forEach(arrow => arrow.remove()); // Remove existing arrows
            hoveredarrows = [];
        });
        //when a box is clicked, we draw arrows to all boxes it is connected to and grey out everything else
        innerBox.addEventListener('click', function () {       
            if (!innerBox.classList.contains('clicked')){
                innerBox.classList.add('clicked');
                var explanationBox = document.querySelector('.explanation');
                //Store the original content
                if (!explanationBox.dataset.originalContent) {
                    explanationBox.dataset.originalContent = explanationBox.innerHTML;
                }
    
                var boxElement = innerBox.closest('.box');
    
                if (boxElement) {
                    //Use the text content of the hovered element as the identifier
                    var smallBoxName = formatToSmallBoxName(innerBox.textContent);
                    var content = boxContents[smallBoxName];
                    clickedBox = formatToSmallBoxName(content.title);
                    explanationBox.innerHTML = `<div class="box-content"><div class="box-title"><strong>${content.title}</strong></div><div class="box-explanation">${content.explanation}</div></div>`;
                    
                    var relatedBoxes = getRelatedBoxes(smallBoxName);                
                    var rightBoxes = getRightBoxes(smallBoxName);
    
                    innerBoxes.forEach(function (box) {
                            //check if the small box is in relatedBoxes
                            var relatedBox = formatToSmallBoxName(box.textContent);
                            var isRelated = relatedBoxes.includes(relatedBox);
                            if (!isRelated) { //if not in related, then we need to grey it out
                                box.classList.add('greyed-out');
                            }else{
                                //drawing arrows connecting components using the arrowLine function
                                //https://github.com/stanko-arbutina/arrow-line?tab=readme-ov-file
                                if (relatedBox != smallBoxName){
                                    if (rightBoxes.includes(relatedBox)){
                                        const arrow = arrowLine('.' + smallBoxName, '.' + relatedBox, { color: 'white' });
                                        clickedarrows.push(arrow)
                                    }else{
                                        const arrow = arrowLine('.' + relatedBox, '.' + smallBoxName, { color: 'white' });
                                        clickedarrows.push(arrow)
                                    }  
                                }
                            }
                    });
    
                }
            }else{ //when the box is unclicked, we restore everything
                innerBox.classList.remove('clicked');
                clickedBox = null;
                var explanationBox = document.querySelector('.explanation');
                explanationBox.innerHTML = explanationBox.dataset.originalContent;
    
                innerBoxes.forEach(function (box) {
                    box.classList.remove('greyed-out');
                });
    
                clickedarrows.forEach(arrow => arrow.remove()); //remove existing arrows
                clickedarrows = [];
            }
        });

        
    });

});

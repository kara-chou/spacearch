//zoom events for layer navigation
window.addEventListener("wheel", (e) => {
    console.log("wheel");
    e.preventDefault();

    // Zooming out, leads to layer 2
    if (e.deltaX < 0 || e.deltaY < 0) {
        window.location.href = 'layer2.html';
    }
}, { passive: false });

/*HOVERING, displays text within the box
Define content for each box, CHANGE EXPLANATION TEXTS HERE*/
var boxContents = {
    selection: {
        title: "Selection",
        explanation: "Explanation for Selection."
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
    monotony:{
        title: "Monotony",
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
    psychotherapy:{
        title: "Psychotherapy",
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
    medical_capabilities:{
        title: "Medical Capabilites",
        explanation: "Explanations."
    },
    clothing:{
        title: "Clothing",
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
    habitat:{
        title: "Habitat",
        explanation: "Explanations."
    },
    material_monotony:{
        title: "Material Monotony",
        explanation: "Explanations."
    },
    layout:{
        title: "Layout",
        explanation: "Explanations."
    },
    reprogrammability:{
        title: "Reprogrammability",
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
    lighting:{
        title: "Lighting",
        explanation: "Explanations."
    },
    radiation:{
        title: "Radiation",
        explanation: "Explanations."
    },
    contaminants:{
        title: "Contaminants",
        explanation: "Explanations."
    },
    volume:{
        title: "Volume",
        explanation: "Explanations."
    },
    temperature_and_humidity:{
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
    cohesion_processes:{
        title: "Cohesion Processes",
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
    physical_health:{
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
    nostalgia_homesickness:{
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


document.addEventListener('DOMContentLoaded', function () {
    //Get all inner box elements
    var innerBoxes = document.querySelectorAll('.box div');

    //Format text to the desired format
    function formatToSmallBoxName(text) {
        return text.trim().toLowerCase().replace(/\s+/g, '_');
    }

    function getRelatedBoxes(smallBoxName) {
        switch (smallBoxName) {
            case 'selection':
                return ['selection', 'crew_composition', 'confined', 'crew_size', 'monotony', 'social_density', 'social_support', 'group_living', 'habitat', 'isolated', 'social_density', 'isolated', 'openness', 'cohesion_processes', 'fixtures', 'privacy', 'extraversion', 'emotional_bandwidth', 'cohesion_processes', 'agreeableness', 'neuroticism', 'conscientiousness', 'cohesion_processes', 'circulation_paths', 'privacy', 'volume', 'physical_ergonomics', 'layout', 'mission_duration', 'ground_support']
            case 'distance_from_earth':
                return ['distance_from_earth', 'communication_delay', 'resource_constrained', 'ground_support', 'supplies', 'training_and_preperation', 'isolated', 'family_and_friends', 'psychotherapy', 'medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'food', 'physical_health', 'mission_duration', 'monotony', 'crew_size', 'stress_regulation', 'stress_regulation', 'material_monotony', 'physical_workload', 'physical_health', 'monotony', 'nutrition', 'material_monotony', 'genetics', 'physical_ergonomics', 'medical_capabilites', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'crew_composition', 'openness', 'cohesion_processes', 'crew_composition', 'social_density', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress']
            case 'communication_delay':
                return ['communication_delay', 'distance_from_earth', 'ground_support', 'resource_constrained', 'isolated', 'family_and_friends', 'psychotherapy', 'supplies', 'training_and_preperation', 'mission_duration', 'monotony', 'crew_size', 'stress_regulation', 'stress_regulation', 'medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'food', 'physical_health', 'crew_composition', 'openness', 'cohesion_processes', 'fixtures', 'crew_composition', 'social_density', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress']
            case 'mission_duration':
                return ['mission_duration', 'isolated', 'monotony', 'crew_size', 'ground_support', 'crew_composition', 'openness', 'cohesion_processes', 'fixtures', 'crew_composition', 'social_density', 'communication_delay', 'family_and_friends', 'psychotherapy', 'selection', 'confined', 'social_density', 'social_support', 'group_living', 'action_processes', 'transition_processes', 'cohesion_processes', 'extraversion', 'agreeableness', 'neuroticism', 'conscientiousness', 'social_support', 'group_living', 'conflicts', 'kinship', 'supplies']
            case 'isolated':
                return ['isolated', 'mission_duration', 'monotony', 'crew_size', 'ground_support', 'crew_composition', 'openness', 'cohesion_processes', 'fixtures', 'crew_composition', 'social_density', 'communication_delay', 'family_and_friends', 'psychotherapy', 'selection', 'confined', 'social_density', 'social_support', 'group_living', 'action_processes', 'transition_processes', 'cohesion_processes', 'extraversion', 'agreeableness', 'neuroticism', 'conscientiousness', 'social_support', 'group_living', 'conflicts', 'kinship', 'supplies']
            case 'confined':
                return ['confined', 'crew_composition', 'habitat', 'selection', 'crew_size', 'monotony', 'social_density', 'social_support', 'group_living', 'privacy', 'volume', 'physical_ergonomics', 'layout', 'isolated', 'social_density', 'isolated', 'openness', 'cohesion_processes', 'fixtures', 'privacy', 'extraversion', 'emotional_bandwidth', 'cohesion_processes', 'agreeableness', 'neuroticism', 'conscientiousness', 'cohesion_processes', 'circulation_paths', 'placemaking', 'sleep', 'stress_regulation', 'volume', 'media_attention', 'physical_health', 'temperature_and_humidity', 'altered_gravity', 'contaminants', 'lighting', 'reprogrammability', 'circulation_paths', 'mission_duration', 'ground_support']
            case 'extreme':
                return ['extreme', 'media_attention', 'altered_gravity', 'light_dark_cycles', 'radiation', 'privacy', 'cognitive_workload', 'physical_health', 'physical_ergonomics', 'sleep', 'physical_health', 'physical_health', 'social_density', 'habitat', 'placemaking', 'sleep', 'stress_regulation', 'volume', 'mission_demands', 'stress_regulation', 'sleep', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'lighting', 'nutrition', 'physical_workload', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'habitat', 'temperature_and_humidity', 'contaminants', 'lighting', 'neuroticism', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'depression', 'anxiety', 'sleep_quality']
            case 'resource_constrained':
                return ['resource_constrained', 'distance_from_earth', 'supplies', 'training_and_preperation', 'communication_delay', 'medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'food', 'physical_health', 'ground_support', 'material_monotony', 'physical_workload', 'physical_health', 'monotony', 'nutrition', 'material_monotony', 'genetics', 'physical_ergonomics', 'medical_capabilites', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'isolated', 'family_and_friends', 'psychotherapy', 'lighting', 'temperature_and_humidity', 'boredom', 'stress_regulation', 'mission_demands', 'sleep']
            case 'mission_demands':
                return ['mission_demands', 'mission_events', 'cognitive_workload', 'physical_workload', 'conflicts', 'injuries', 'media_attention', 'stress_regulation', 'sleep', 'exercise_equipment', 'physical_health', 'sleep', 'cohesion_processes', 'action_processes', 'physical_health', 'extreme', 'privacy', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'depression', 'anxiety', 'discontentment', 'stress', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'supplies', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress']
            case 'mission_events':
                return ['mission_events', 'mission_demands', 'conflicts', 'injuries', 'cognitive_workload', 'physical_workload', 'cohesion_processes', 'action_processes', 'physical_health', 'media_attention', 'stress_regulation', 'sleep', 'exercise_equipment', 'physical_health', 'sleep', 'extraversion', 'openness', 'agreeableness', 'neuroticism', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'kinship', 'openness', 'agreeableness', 'crew_performance', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'extreme', 'privacy', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'depression', 'anxiety', 'discontentment', 'stress', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'depression', 'anxiety', 'sleep_quality', 'supplies']
            case 'extraversion':
                return ['extraversion', 'cohesion_processes', 'social_support', 'openness', 'agreeableness', 'neuroticism', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'kinship', 'crew_composition', 'emotional_bandwidth', 'action_processes', 'transition_processes', 'monotony', 'action_processes', 'group_living', 'sleep', 'transition_processes', 'stress_regulation', 'group_living', 'group_living']
            case 'openness':
                return ['openness', 'action_processes', 'transition_processes', 'cohesion_processes', 'monotony', 'agreeableness', 'conflicts', 'crew_performance', 'neuroticism', 'crew_performance', 'extraversion', 'agreeableness', 'neuroticism', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'kinship', 'isolated', 'crew_composition', 'fixtures', 'group_living', 'mission_events', 'sleep', 'stress_regulation', 'group_living', 'social_support']
            case 'agreeableness':
                return ['agreeableness', 'cohesion_processes', 'action_processes', 'group_living', 'extraversion', 'openness', 'neuroticism', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'kinship', 'openness', 'conflicts', 'crew_performance', 'crew_composition', 'neuroticism', 'conscientiousness', 'circulation_paths', 'social_support', 'transition_processes', 'monotony', 'sleep', 'transition_processes', 'stress_regulation', 'crew_composition', 'emotional_bandwidth', 'isolated', 'crew_composition', 'fixtures']
            case 'conscientiousness':
                return ['conscientiousness', 'cohesion_processes', 'group_living', 'extraversion', 'openness', 'agreeableness', 'neuroticism', 'social_support', 'monotony', 'group_living', 'conflicts', 'kinship', 'crew_composition', 'agreeableness', 'neuroticism', 'circulation_paths', 'social_support', 'action_processes', 'transition_processes', 'monotony', 'action_processes', 'sleep', 'transition_processes', 'stress_regulation', 'crew_composition', 'emotional_bandwidth', 'isolated', 'crew_composition', 'fixtures']
            case 'neuroticism':
                return ['neuroticism', 'sleep', 'cohesion_processes', 'transition_processes', 'stress_regulation', 'group_living', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'extraversion', 'openness', 'agreeableness', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'kinship', 'openness', 'crew_performance', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress', 'crew_composition', 'agreeableness', 'conscientiousness', 'circulation_paths', 'social_density', 'habitat', 'placemaking', 'volume', 'media_attention', 'extreme', 'physical_health', 'physical_ergonomics', 'material_monotony', 'physical_health', 'physical_ergonomics', 'physical_ergonomics', 'material_monotony', 'food', 'physical_health', 'mission_demands', 'exercise_equipment', 'physical_health', 'mission_demands', 'media_attention', 'physical_health', 'physical_health', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'altered_gravity', 'radiation', 'injuries', 'tranquility', 'stress', 'social_support', 'action_processes', 'monotony', 'action_processes', 'crew_composition', 'emotional_bandwidth', 'isolated', 'crew_composition', 'fixtures']
            case 'emotional_bandwidth':
                return ['emotional_bandwidth', 'stress_regulation', 'social_support', 'neuroticism', 'resilience', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress', 'crew_composition', 'extraversion', 'cohesion_processes', 'sleep', 'cohesion_processes', 'transition_processes', 'group_living', 'social_density', 'habitat', 'placemaking', 'sleep', 'volume', 'media_attention', 'ground_support', 'ground_support', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'boredom', 'mission_demands', 'media_attention', 'sleep', 'sleep', 'physical_health', 'sleep', 'physical_health', 'placemaking', 'physical_health', 'selection', 'confined', 'crew_size', 'monotony', 'social_density', 'group_living', 'cohesion_processes', 'openness', 'agreeableness', 'conscientiousness', 'monotony', 'group_living', 'conflicts', 'kinship', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'sleep_quality', 'physical_health']
            case 'genetics':
                return ['genetics', 'physical_health', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'habitat', 'temperature_and_humidity', 'altered_gravity', 'contaminants', 'lighting', 'resource_constrained', 'supplies', 'physical_workload', 'extreme', 'sleep', 'extreme', 'material_monotony', 'sleep', 'extreme', 'food', 'sleep', 'mission_demands', 'sleep', 'mission_events', 'neuroticism', 'privacy', 'contaminants', 'temperature_and_humidity', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'stress_regulation', 'stress_regulation', 'stress_regulation', 'confined', 'privacy', 'volume', 'layout', 'material_monotony']
            case 'resilience':
                return ['resilience', 'stress_regulation', 'neuroticism', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress', 'sleep', 'cohesion_processes', 'transition_processes', 'group_living', 'social_support', 'social_density', 'habitat', 'placemaking', 'sleep', 'volume', 'media_attention', 'ground_support', 'ground_support', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'boredom', 'mission_demands', 'media_attention', 'sleep', 'sleep', 'physical_health', 'sleep', 'physical_health', 'placemaking', 'physical_health', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'sleep_quality', 'physical_health', 'extraversion', 'openness', 'agreeableness', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'kinship', 'openness', 'crew_performance', 'crew_composition', 'agreeableness', 'conscientiousness', 'circulation_paths', 'crew_composition', 'extraversion', 'crew_composition', 'crew_size', 'confined', 'volume', 'physical_ergonomics', 'layout', 'reprogrammability', 'trust', 'agency', 'nostalgia_homesickness', 'attachment']
            case 'crew_size':
                return ['crew_size', 'isolated', 'crew_composition', 'social_density', 'mission_duration', 'monotony', 'ground_support', 'selection', 'confined', 'monotony', 'social_density', 'social_support', 'group_living', 'privacy', 'openness', 'cohesion_processes', 'fixtures', 'communication_delay', 'family_and_friends', 'psychotherapy', 'habitat']
            case 'social_support':
                return ['social_support', 'crew_composition', 'extraversion', 'emotional_bandwidth', 'cohesion_processes', 'selection', 'confined', 'crew_size', 'monotony', 'social_density', 'group_living', 'cohesion_processes', 'stress_regulation', 'openness', 'agreeableness', 'neuroticism', 'conscientiousness', 'monotony', 'group_living', 'conflicts', 'kinship', 'habitat', 'isolated', 'social_density', 'isolated', 'openness', 'fixtures', 'privacy', 'agreeableness', 'neuroticism', 'conscientiousness', 'circulation_paths']
            case 'social_density':
                return ['social_density', 'crew_composition', 'crew_size', 'privacy', 'selection', 'confined', 'crew_size', 'monotony', 'social_support', 'group_living', 'isolated', 'habitat', 'placemaking', 'sleep', 'stress_regulation', 'volume', 'media_attention', 'habitat']
            case 'group_living':
                return ['group_living', 'crew_composition', 'agreeableness', 'neuroticism', 'conscientiousness', 'cohesion_processes', 'circulation_paths', 'selection', 'confined', 'crew_size', 'monotony', 'social_density', 'social_support', 'cohesion_processes', 'action_processes', 'sleep', 'cohesion_processes', 'transition_processes', 'stress_regulation', 'cohesion_processes', 'extraversion', 'openness', 'social_support', 'monotony', 'conflicts', 'kinship', 'reprogrammability', 'layout', 'habitat', 'isolated', 'social_density', 'isolated', 'openness', 'fixtures', 'privacy', 'extraversion', 'emotional_bandwidth']
            case 'monotony':
                return ['monotony', 'isolated', 'crew_composition', 'openness', 'cohesion_processes', 'fixtures', 'mission_duration', 'crew_size', 'ground_support', 'selection', 'confined', 'crew_size', 'social_density', 'social_support', 'group_living', 'action_processes', 'transition_processes', 'cohesion_processes', 'extraversion', 'agreeableness', 'neuroticism', 'conscientiousness', 'social_support', 'group_living', 'conflicts', 'kinship', 'supplies', 'social_density', 'communication_delay', 'family_and_friends', 'psychotherapy', 'habitat']
            case 'habitat':
                return ['habitat', 'confined', 'privacy', 'volume', 'physical_ergonomics', 'layout', 'crew_composition', 'social_density', 'placemaking', 'sleep', 'stress_regulation', 'volume', 'media_attention', 'physical_health', 'temperature_and_humidity', 'altered_gravity', 'contaminants', 'lighting', 'reprogrammability', 'circulation_paths', 'selection', 'crew_size', 'monotony', 'social_density', 'social_support', 'group_living', 'crew_size', 'reprogrammability', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'neuroticism', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'neuroticism', 'resilience', 'emotional_bandwidth', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress', 'extreme', 'cognitive_workload', 'genetics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'material_monotony', 'extreme', 'material_monotony', 'circulation_paths', 'group_living', 'isolated', 'isolated', 'openness', 'cohesion_processes', 'fixtures']
            case 'circulation_paths':
                return ['circulation_paths', 'reprogrammability', 'group_living', 'layout', 'layout', 'placemaking', 'crew_composition', 'agreeableness', 'neuroticism', 'conscientiousness', 'cohesion_processes', 'habitat']
            case 'layout':
                return ['layout', 'habitat', 'reprogrammability', 'circulation_paths', 'confined', 'privacy', 'volume', 'physical_ergonomics', 'circulation_paths', 'placemaking', 'group_living', 'crew_composition', 'social_density', 'placemaking', 'sleep', 'stress_regulation', 'volume', 'media_attention', 'physical_health', 'temperature_and_humidity', 'altered_gravity', 'contaminants', 'lighting']
            case 'privacy':
                return ['privacy', 'social_density', 'habitat', 'placemaking', 'sleep', 'stress_regulation', 'volume', 'media_attention', 'crew_composition', 'crew_size', 'confined', 'volume', 'physical_ergonomics', 'layout', 'reprogrammability', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'neuroticism', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'neuroticism', 'resilience', 'emotional_bandwidth', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress', 'extreme', 'cognitive_workload', 'selection', 'confined', 'crew_size', 'monotony', 'social_support', 'group_living', 'isolated', 'physical_health', 'temperature_and_humidity', 'altered_gravity', 'contaminants', 'lighting', 'reprogrammability', 'circulation_paths', 'circulation_paths', 'cohesion_processes', 'transition_processes', 'group_living', 'extreme', 'physical_health', 'material_monotony', 'physical_health', 'material_monotony', 'food', 'physical_health', 'mission_demands', 'exercise_equipment', 'physical_health', 'mission_demands', 'physical_health', 'physical_health', 'physical_health', 'genetics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'altered_gravity', 'radiation', 'injuries', 'tranquility', 'stress']
            case 'physical_ergonomics':
                return ['physical_ergonomics', 'habitat', 'physical_health', 'temperature_and_humidity', 'altered_gravity', 'contaminants', 'lighting', 'confined', 'privacy', 'volume', 'layout', 'genetics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'sleep', 'material_monotony', 'extreme', 'sleep', 'material_monotony', 'sleep', 'crew_composition', 'social_density', 'placemaking', 'sleep', 'stress_regulation', 'volume', 'media_attention', 'reprogrammability', 'circulation_paths', 'resource_constrained', 'supplies', 'physical_workload', 'extreme', 'sleep']
            case 'fixtures':
                return ['fixtures', 'monotony', 'supplies', 'isolated', 'crew_composition', 'openness', 'cohesion_processes', 'resource_constrained', 'medical_capabilities', 'clothing', 'exercise_equipment', 'food', 'mission_duration', 'crew_size', 'ground_support', 'selection', 'confined', 'crew_size', 'social_density', 'social_support', 'group_living', 'action_processes', 'transition_processes', 'cohesion_processes', 'extraversion', 'agreeableness', 'neuroticism', 'conscientiousness', 'social_support', 'group_living', 'conflicts', 'kinship', 'distance_from_earth', 'training_and_preperation', 'material_monotony', 'physical_workload', 'physical_health', 'nutrition', 'material_monotony', 'social_density', 'communication_delay', 'family_and_friends', 'psychotherapy', 'habitat']
            case 'reprogrammability':
                return ['reprogrammability', 'circulation_paths', 'layout', 'placemaking', 'group_living', 'layout', 'habitat', 'privacy', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'crew_composition', 'agreeableness', 'neuroticism', 'conscientiousness', 'cohesion_processes']
            case 'material_monotony':
                return ['material_monotony', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'boredom', 'stress_regulation', 'supplies', 'supplies', 'nutrition', 'physical_health', 'sleep', 'physical_ergonomics', 'physical_ergonomics', 'sleep', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress', 'resource_constrained', 'medical_capabilities', 'exercise_equipment', 'fixtures']
            case 'psychotherapy':
                return ['psychotherapy', 'stress_regulation', 'ground_support', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress', 'communication_delay', 'isolated', 'family_and_friends', 'sleep', 'cohesion_processes', 'transition_processes', 'group_living', 'social_support', 'social_density', 'habitat', 'placemaking', 'sleep', 'volume', 'media_attention', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'boredom', 'mission_demands', 'media_attention', 'sleep', 'sleep', 'physical_health', 'sleep', 'physical_health', 'placemaking', 'physical_health', 'distance_from_earth', 'mission_duration', 'monotony', 'crew_size', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'sleep_quality', 'physical_health', 'extraversion', 'openness', 'agreeableness', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'kinship', 'openness', 'crew_performance', 'crew_composition', 'agreeableness', 'conscientiousness', 'circulation_paths', 'crew_composition', 'extraversion', 'crew_composition', 'crew_size', 'confined', 'volume', 'physical_ergonomics', 'layout', 'reprogrammability', 'trust', 'agency', 'nostalgia_homesickness', 'attachment']
            case 'clothing':
                return ['clothing', 'material_monotony', 'supplies', 'food', 'lighting', 'temperature_and_humidity', 'boredom', 'stress_regulation', 'resource_constrained', 'medical_capabilities', 'exercise_equipment', 'fixtures', 'food', 'nutrition', 'physical_health', 'sleep', 'physical_ergonomics', 'physical_ergonomics', 'sleep', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress', 'distance_from_earth', 'training_and_preperation', 'physical_workload', 'physical_health', 'monotony']
            case 'training_and_preperation':
                return ['training_and_preperation', 'resource_constrained', 'physical_health', 'distance_from_earth', 'supplies', 'genetics', 'physical_ergonomics', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'communication_delay', 'medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'food', 'habitat', 'temperature_and_humidity', 'altered_gravity', 'contaminants', 'lighting', 'physical_workload', 'extreme', 'sleep', 'extreme', 'material_monotony', 'sleep', 'extreme', 'food', 'sleep', 'mission_demands', 'sleep', 'mission_events', 'neuroticism', 'privacy', 'contaminants', 'temperature_and_humidity', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'stress_regulation', 'stress_regulation', 'stress_regulation', 'ground_support', 'material_monotony']
            case 'family_and_friends':
                return ['family_and_friends', 'stress_regulation', 'ground_support', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress', 'communication_delay', 'isolated', 'psychotherapy', 'sleep', 'cohesion_processes', 'transition_processes', 'group_living', 'social_support', 'social_density', 'habitat', 'placemaking', 'sleep', 'volume', 'media_attention', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'boredom', 'mission_demands', 'media_attention', 'sleep', 'sleep', 'physical_health', 'sleep', 'physical_health', 'placemaking', 'physical_health', 'distance_from_earth', 'mission_duration', 'monotony', 'crew_size', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'sleep_quality', 'physical_health', 'extraversion', 'openness', 'agreeableness', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'kinship', 'openness', 'crew_performance', 'crew_composition', 'agreeableness', 'conscientiousness', 'circulation_paths', 'crew_composition', 'extraversion', 'crew_composition', 'crew_size', 'confined', 'volume', 'physical_ergonomics', 'layout', 'reprogrammability', 'trust', 'agency', 'nostalgia_homesickness', 'attachment']
            case 'ground_support':
                return ['ground_support', 'communication_delay', 'isolated', 'family_and_friends', 'psychotherapy', 'distance_from_earth', 'mission_duration', 'monotony', 'crew_size', 'stress_regulation', 'stress_regulation', 'resource_constrained', 'crew_composition', 'openness', 'cohesion_processes', 'fixtures', 'crew_composition', 'social_density', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress']
            case 'supplies':
                return ['supplies', 'resource_constrained', 'medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'food', 'distance_from_earth', 'training_and_preperation', 'material_monotony', 'physical_workload', 'physical_health', 'monotony', 'nutrition', 'material_monotony', 'communication_delay', 'physical_health', 'lighting', 'temperature_and_humidity', 'boredom', 'stress_regulation', 'mission_demands', 'physical_health', 'sleep', 'genetics', 'physical_ergonomics', 'medical_capabilites', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'isolated', 'crew_composition', 'openness', 'cohesion_processes', 'sleep']
            case 'medical_capabilites':
                return ['medical_capabilites', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'habitat', 'temperature_and_humidity', 'altered_gravity', 'contaminants', 'lighting', 'resource_constrained', 'supplies', 'physical_workload', 'extreme', 'sleep', 'extreme', 'material_monotony', 'sleep', 'extreme', 'food', 'sleep', 'mission_demands', 'sleep', 'mission_events', 'neuroticism', 'privacy', 'contaminants', 'temperature_and_humidity', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'stress_regulation', 'stress_regulation', 'stress_regulation', 'confined', 'privacy', 'volume', 'layout', 'material_monotony']
            case 'food':
                return ['food', 'supplies', 'nutrition', 'material_monotony', 'resource_constrained', 'medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'sleep', 'physical_health', 'clothing', 'lighting', 'temperature_and_humidity', 'boredom', 'stress_regulation', 'distance_from_earth', 'training_and_preperation', 'physical_workload', 'physical_health', 'monotony', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'physical_workload', 'injuries', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'physical_ergonomics', 'physical_ergonomics', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress', 'communication_delay', 'mission_demands']
            case 'exercise_equipment':
                return ['exercise_equipment', 'supplies', 'physical_workload', 'physical_health', 'resource_constrained', 'medical_capabilities', 'clothing', 'fixtures', 'food', 'mission_demands', 'physical_health', 'sleep', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'distance_from_earth', 'training_and_preperation', 'material_monotony', 'monotony', 'nutrition', 'material_monotony', 'mission_events', 'cognitive_workload']
            case 'light_dark_cycles':
                return ['light_dark_cycles', 'extreme', 'sleep', 'physical_health', 'media_attention', 'altered_gravity', 'radiation', 'neuroticism', 'privacy', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'privacy', 'cognitive_workload', 'physical_ergonomics', 'cohesion_processes', 'transition_processes', 'stress_regulation', 'group_living', 'social_density', 'habitat', 'placemaking', 'stress_regulation', 'volume', 'physical_ergonomics', 'material_monotony', 'physical_ergonomics', 'physical_ergonomics', 'material_monotony', 'food', 'mission_demands', 'exercise_equipment', 'mission_demands', 'stress_regulation', 'stress_regulation', 'stress_regulation']
            case 'altered_gravity':
                return ['altered_gravity', 'extreme', 'physical_health', 'physical_ergonomics', 'media_attention', 'light_dark_cycles', 'radiation', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'habitat', 'temperature_and_humidity', 'contaminants', 'lighting', 'privacy', 'cognitive_workload', 'sleep']
            case 'lighting':
                return ['lighting', 'material_monotony', 'physical_health', 'sleep', 'physical_ergonomics', 'clothing', 'food', 'temperature_and_humidity', 'boredom', 'stress_regulation', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'habitat', 'temperature_and_humidity', 'altered_gravity', 'contaminants', 'supplies', 'supplies', 'nutrition', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress']
            case 'radiation':
                return ['radiation', 'extreme', 'physical_health', 'media_attention', 'altered_gravity', 'light_dark_cycles', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'nutrition', 'physical_workload', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'privacy', 'cognitive_workload', 'physical_ergonomics', 'sleep', 'habitat', 'temperature_and_humidity', 'contaminants', 'lighting', 'resource_constrained', 'supplies', 'physical_workload']
            case 'contaminants':
                return ['contaminants', 'physical_ergonomics', 'sleep', 'habitat', 'physical_health', 'temperature_and_humidity', 'altered_gravity', 'lighting', 'neuroticism', 'privacy', 'light_dark_cycles', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'confined', 'privacy', 'volume', 'layout', 'genetics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'material_monotony', 'extreme', 'material_monotony', 'cohesion_processes', 'transition_processes', 'stress_regulation', 'group_living', 'social_density', 'placemaking', 'stress_regulation', 'volume', 'media_attention', 'extreme']
            case 'volume':
                return ['volume', 'habitat', 'privacy', 'confined', 'privacy', 'physical_ergonomics', 'layout', 'social_density', 'placemaking', 'sleep', 'stress_regulation', 'media_attention', 'crew_composition']
            case 'temperature_and_humidity':
                return ['temperature_and_humidity', 'physical_ergonomics', 'sleep', 'material_monotony', 'habitat', 'physical_health', 'altered_gravity', 'contaminants', 'lighting', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'clothing', 'food', 'lighting', 'boredom', 'stress_regulation', 'confined', 'privacy', 'volume', 'layout', 'genetics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'extreme', 'cohesion_processes', 'transition_processes', 'stress_regulation', 'group_living', 'social_density', 'placemaking', 'stress_regulation', 'volume', 'media_attention', 'extreme', 'food', 'mission_demands', 'exercise_equipment', 'mission_demands', 'media_attention', 'stress_regulation', 'stress_regulation', 'stress_regulation']
            case 'nutrition':
                return ['nutrition', 'food', 'sleep', 'physical_health', 'supplies', 'material_monotony', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'physical_workload', 'injuries', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'resource_constrained', 'medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'clothing', 'lighting', 'temperature_and_humidity', 'boredom', 'stress_regulation', 'cohesion_processes', 'transition_processes', 'stress_regulation', 'group_living', 'social_density', 'habitat', 'placemaking', 'stress_regulation', 'volume', 'media_attention', 'extreme', 'physical_ergonomics', 'physical_ergonomics', 'physical_ergonomics', 'mission_demands', 'exercise_equipment', 'mission_demands', 'media_attention', 'stress_regulation', 'stress_regulation', 'stress_regulation']
            case 'physical_workload':
                return ['physical_workload', 'mission_demands', 'exercise_equipment', 'physical_health', 'sleep', 'mission_events', 'cognitive_workload', 'supplies', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'conflicts', 'injuries', 'media_attention', 'stress_regulation', 'resource_constrained', 'medical_capabilities', 'clothing', 'fixtures', 'food']
            case 'media_attention':
                return ['media_attention', 'extreme', 'privacy', 'cognitive_workload', 'altered_gravity', 'light_dark_cycles', 'radiation', 'social_density', 'habitat', 'placemaking', 'sleep', 'stress_regulation', 'volume', 'mission_demands', 'stress_regulation', 'sleep', 'physical_health', 'physical_ergonomics', 'sleep', 'physical_health', 'physical_health', 'crew_composition', 'crew_size', 'confined', 'volume', 'physical_ergonomics', 'layout', 'reprogrammability', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'neuroticism', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'neuroticism', 'resilience', 'emotional_bandwidth', 'psychotherapy', 'family_and_friends', 'material_monotony', 'depression', 'anxiety', 'discontentment', 'stress', 'mission_events', 'physical_workload']
            case 'conflicts':
                return ['conflicts', 'mission_events', 'cohesion_processes', 'action_processes', 'mission_demands', 'injuries', 'extraversion', 'openness', 'agreeableness', 'neuroticism', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'kinship', 'openness', 'agreeableness', 'crew_performance', 'cognitive_workload', 'physical_workload', 'physical_health', 'social_support', 'transition_processes', 'monotony', 'group_living', 'sleep', 'transition_processes', 'stress_regulation', 'group_living', 'group_living', 'crew_composition', 'emotional_bandwidth', 'isolated', 'crew_composition', 'fixtures', 'crew_composition', 'circulation_paths']
            case 'injuries':
                return ['injuries', 'mission_events', 'physical_health', 'mission_demands', 'conflicts', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'cognitive_workload', 'physical_workload', 'cohesion_processes', 'action_processes', 'habitat', 'temperature_and_humidity', 'altered_gravity', 'contaminants', 'lighting', 'resource_constrained', 'supplies', 'physical_workload', 'extreme', 'sleep', 'extreme', 'material_monotony', 'sleep', 'extreme', 'food', 'sleep', 'sleep', 'neuroticism', 'privacy', 'contaminants', 'temperature_and_humidity', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'stress_regulation', 'stress_regulation', 'stress_regulation', 'media_attention', 'stress_regulation']
            case 'cognitive_workload':
                return ['cognitive_workload', 'mission_demands', 'media_attention', 'stress_regulation', 'sleep', 'mission_events', 'physical_workload', 'extreme', 'privacy', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'depression', 'anxiety', 'discontentment', 'stress', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'conflicts', 'injuries', 'exercise_equipment', 'physical_health', 'altered_gravity', 'light_dark_cycles', 'radiation', 'social_density', 'habitat', 'placemaking', 'volume', 'cohesion_processes', 'transition_processes', 'group_living', 'social_support']
            case 'transition_processes':
                return ['transition_processes', 'openness', 'neuroticism', 'crew_performance', 'action_processes', 'cohesion_processes', 'monotony', 'sleep', 'cohesion_processes', 'stress_regulation', 'group_living', 'action_processes', 'agreeableness', 'conflicts', 'extraversion', 'agreeableness', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'kinship', 'isolated', 'crew_composition', 'fixtures', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health']
            case 'action_processes':
                return ['action_processes', 'openness', 'agreeableness', 'conflicts', 'crew_performance', 'transition_processes', 'cohesion_processes', 'monotony', 'cohesion_processes', 'group_living', 'mission_events', 'cohesion_processes', 'transition_processes', 'neuroticism', 'extraversion', 'neuroticism', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'kinship', 'isolated', 'crew_composition', 'fixtures']
            case 'cohesion_processes':
                return ['cohesion_processes', 'extraversion', 'openness', 'agreeableness', 'neuroticism', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'kinship', 'social_support', 'action_processes', 'transition_processes', 'monotony', 'action_processes', 'group_living', 'sleep', 'transition_processes', 'stress_regulation', 'group_living', 'group_living', 'crew_composition', 'emotional_bandwidth', 'isolated', 'crew_composition', 'fixtures', 'crew_composition', 'circulation_paths', 'mission_events', 'action_processes']
            case 'stress_regulation':
                return ['stress_regulation', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress', 'sleep', 'cohesion_processes', 'transition_processes', 'group_living', 'social_support', 'social_density', 'habitat', 'placemaking', 'sleep', 'volume', 'media_attention', 'ground_support', 'ground_support', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'boredom', 'mission_demands', 'media_attention', 'sleep', 'sleep', 'physical_health', 'sleep', 'physical_health', 'placemaking', 'physical_health', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'sleep_quality', 'physical_health', 'extraversion', 'openness', 'agreeableness', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'kinship', 'openness', 'crew_performance', 'crew_composition', 'agreeableness', 'conscientiousness', 'circulation_paths', 'crew_composition', 'extraversion', 'crew_composition', 'crew_size', 'confined', 'volume', 'physical_ergonomics', 'layout', 'reprogrammability', 'trust', 'agency', 'nostalgia_homesickness', 'attachment']
            case 'placemaking':
                return ['placemaking', 'privacy', 'reprogrammability', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'social_density', 'habitat', 'sleep', 'stress_regulation', 'volume', 'media_attention', 'circulation_paths', 'layout', 'stress_regulation', 'crew_composition', 'crew_size', 'confined', 'volume', 'physical_ergonomics', 'layout', 'neuroticism', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'neuroticism', 'resilience', 'emotional_bandwidth', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'stress', 'extreme', 'cognitive_workload', 'group_living', 'layout']
            case 'sleep':
                return ['sleep', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'cohesion_processes', 'transition_processes', 'stress_regulation', 'group_living', 'social_density', 'habitat', 'placemaking', 'stress_regulation', 'volume', 'media_attention', 'extreme', 'physical_health', 'physical_ergonomics', 'material_monotony', 'physical_health', 'physical_ergonomics', 'physical_ergonomics', 'material_monotony', 'food', 'physical_health', 'mission_demands', 'exercise_equipment', 'physical_health', 'mission_demands', 'media_attention', 'stress_regulation', 'stress_regulation', 'physical_health', 'stress_regulation', 'physical_health', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'altered_gravity', 'radiation', 'injuries', 'tranquility', 'stress', 'extraversion', 'openness', 'agreeableness', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'kinship', 'openness', 'crew_performance', 'resilience', 'emotional_bandwidth', 'psychotherapy', 'family_and_friends', 'material_monotony', 'discontentment', 'stress', 'crew_composition', 'agreeableness', 'conscientiousness', 'circulation_paths', 'crew_composition', 'crew_size', 'confined', 'volume', 'physical_ergonomics', 'layout', 'reprogrammability', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment']
            case 'physical_health':
                return ['physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'habitat', 'temperature_and_humidity', 'altered_gravity', 'contaminants', 'lighting', 'resource_constrained', 'supplies', 'physical_workload', 'extreme', 'sleep', 'extreme', 'material_monotony', 'sleep', 'extreme', 'food', 'sleep', 'mission_demands', 'sleep', 'mission_events', 'neuroticism', 'privacy', 'contaminants', 'temperature_and_humidity', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'stress_regulation', 'stress_regulation', 'stress_regulation', 'confined', 'privacy', 'volume', 'layout', 'material_monotony']
            case 'sleep_quality':
                return ['sleep_quality', 'sleep', 'physical_health', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'depression', 'anxiety', 'tranquility', 'stress', 'cohesion_processes', 'transition_processes', 'stress_regulation', 'group_living', 'social_density', 'habitat', 'placemaking', 'stress_regulation', 'volume', 'media_attention', 'extreme', 'physical_ergonomics', 'material_monotony', 'physical_ergonomics', 'physical_ergonomics', 'material_monotony', 'food', 'mission_demands', 'exercise_equipment', 'mission_demands', 'media_attention', 'stress_regulation', 'stress_regulation', 'stress_regulation']
            case 'crew_performance':
                return ['crew_performance', 'transition_processes', 'action_processes', 'openness', 'neuroticism', 'openness', 'agreeableness', 'conflicts', 'cohesion_processes', 'monotony', 'sleep', 'cohesion_processes', 'stress_regulation', 'group_living']
            case 'anxiety':
                return ['anxiety', 'stress_regulation', 'sleep', 'physical_health', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'discontentment', 'stress', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'sleep_quality', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'depression', 'tranquility', 'sleep_quality', 'stress', 'cohesion_processes', 'transition_processes', 'group_living', 'social_support', 'social_density', 'habitat', 'placemaking', 'volume', 'media_attention', 'ground_support', 'ground_support', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'boredom', 'mission_demands', 'media_attention', 'placemaking']
            case 'attachment':
                return ['attachment', 'placemaking', 'privacy', 'reprogrammability', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'social_density', 'habitat', 'sleep', 'stress_regulation', 'volume', 'media_attention', 'circulation_paths', 'layout', 'stress_regulation', 'crew_composition', 'crew_size', 'confined', 'volume', 'physical_ergonomics', 'layout', 'neuroticism', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'neuroticism', 'resilience', 'emotional_bandwidth', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'stress', 'extreme', 'cognitive_workload', 'group_living', 'layout']
            case 'trust':
                return ['trust', 'placemaking', 'privacy', 'reprogrammability', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment', 'social_density', 'habitat', 'sleep', 'stress_regulation', 'volume', 'media_attention', 'circulation_paths', 'layout', 'stress_regulation', 'crew_composition', 'crew_size', 'confined', 'volume', 'physical_ergonomics', 'layout', 'neuroticism', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'neuroticism', 'resilience', 'emotional_bandwidth', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'stress', 'extreme', 'cognitive_workload', 'group_living', 'layout']
            case 'agency':
                return ['agency', 'placemaking', 'privacy', 'reprogrammability', 'trust', 'discontentment', 'nostalgia_homesickness', 'attachment', 'social_density', 'habitat', 'sleep', 'stress_regulation', 'volume', 'media_attention', 'circulation_paths', 'layout', 'stress_regulation', 'crew_composition', 'crew_size', 'confined', 'volume', 'physical_ergonomics', 'layout', 'neuroticism', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'neuroticism', 'resilience', 'emotional_bandwidth', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'stress', 'extreme', 'cognitive_workload', 'group_living', 'layout']
            case 'stress':
                return ['stress', 'stress_regulation', 'physical_health', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'sleep', 'cohesion_processes', 'transition_processes', 'group_living', 'social_support', 'social_density', 'habitat', 'placemaking', 'sleep', 'volume', 'media_attention', 'ground_support', 'ground_support', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'boredom', 'mission_demands', 'media_attention', 'sleep', 'sleep', 'sleep', 'placemaking', 'habitat', 'temperature_and_humidity', 'altered_gravity', 'contaminants', 'lighting', 'resource_constrained', 'supplies', 'physical_workload', 'extreme', 'sleep', 'extreme', 'sleep', 'extreme', 'food', 'sleep', 'mission_demands', 'sleep', 'mission_events', 'contaminants', 'temperature_and_humidity', 'sleep_quality']
            case 'discontentment':
                return ['discontentment', 'stress_regulation', 'placemaking', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'stress', 'privacy', 'reprogrammability', 'trust', 'agency', 'nostalgia_homesickness', 'attachment', 'sleep', 'cohesion_processes', 'transition_processes', 'group_living', 'social_support', 'social_density', 'habitat', 'sleep', 'volume', 'media_attention', 'ground_support', 'ground_support', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'boredom', 'mission_demands', 'media_attention', 'sleep', 'sleep', 'physical_health', 'sleep', 'physical_health', 'physical_health']
            case 'kinship':
                return ['kinship', 'cohesion_processes', 'extraversion', 'openness', 'agreeableness', 'neuroticism', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'social_support', 'action_processes', 'transition_processes', 'monotony', 'action_processes', 'group_living', 'sleep', 'transition_processes', 'stress_regulation', 'group_living', 'group_living', 'crew_composition', 'emotional_bandwidth', 'isolated', 'crew_composition', 'fixtures', 'crew_composition', 'circulation_paths', 'mission_events', 'action_processes']
            case 'nostalgia_homesicknes':
                return ['nostalgia_homesickness', 'placemaking', 'privacy', 'reprogrammability', 'trust', 'agency', 'discontentment', 'attachment', 'social_density', 'habitat', 'sleep', 'stress_regulation', 'volume', 'media_attention', 'circulation_paths', 'layout', 'stress_regulation', 'crew_composition', 'crew_size', 'confined', 'volume', 'physical_ergonomics', 'layout', 'neuroticism', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health', 'neuroticism', 'resilience', 'emotional_bandwidth', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'stress', 'extreme', 'cognitive_workload', 'group_living', 'layout']
            case 'boredom':
                return ['boredom', 'material_monotony', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'stress_regulation', 'supplies', 'supplies', 'nutrition', 'physical_health', 'sleep', 'physical_ergonomics', 'physical_ergonomics', 'sleep', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress', 'resource_constrained', 'medical_capabilities', 'exercise_equipment', 'fixtures']
            case 'tranquility':
                return ['tranquility', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'sleep', 'depression', 'anxiety', 'sleep_quality', 'stress', 'habitat', 'temperature_and_humidity', 'altered_gravity', 'contaminants', 'lighting', 'resource_constrained', 'supplies', 'physical_workload', 'extreme', 'sleep', 'extreme', 'material_monotony', 'sleep', 'extreme', 'food', 'sleep', 'mission_demands', 'sleep', 'mission_events', 'neuroticism', 'privacy', 'contaminants', 'temperature_and_humidity', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'stress_regulation', 'stress_regulation', 'stress_regulation', 'confined', 'privacy', 'volume', 'layout', 'material_monotony']
            case 'depression':
                return ['depression', 'stress_regulation', 'sleep', 'physical_health', 'neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'anxiety', 'discontentment', 'stress', 'neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'anxiety', 'sleep_quality', 'physical_health', 'genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilites', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'anxiety', 'tranquility', 'sleep_quality', 'stress', 'cohesion_processes', 'transition_processes', 'group_living', 'social_support', 'social_density', 'habitat', 'placemaking', 'volume', 'media_attention', 'ground_support', 'ground_support', 'clothing', 'food', 'lighting', 'temperature_and_humidity', 'boredom', 'mission_demands', 'media_attention', 'placemaking']
            default:
                return [];
        }
    }
    
    //Event listeners to each inner box
    innerBoxes.forEach(function (innerBox) {
        innerBox.addEventListener('mouseenter', function () {
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

                explanationBox.innerHTML = `<div class="box-content"><div class="box-title"><strong>${content.title}</strong></div><div class="box-explanation">${content.explanation}</div></div>`;
                
                var relatedBoxes = getRelatedBoxes(smallBoxName);

                innerBoxes.forEach(function (box) {
                        //check if the small box is in relatedBoxes
                        var isRelated = relatedBoxes.includes(formatToSmallBoxName(box.textContent));
                        if (!isRelated) { //if not in related, then we need to grey it out
                            box.classList.add('greyed-out');
                        }
                });

            }
        });

        innerBox.addEventListener('mouseleave', function () {
            //Restore the original content
            var explanationBox = document.querySelector('.explanation');
            explanationBox.innerHTML = explanationBox.dataset.originalContent;

            innerBoxes.forEach(function (box) {
                box.classList.remove('greyed-out');
            });
        });
    });
});

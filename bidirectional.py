#given a directed graph, generates an adjacency list that makes it bidirectional
tmp = {
    'distance_from_earth': ['communication_delay', 'resource_constrained'],
    'mission_duration': ['isolated'],
    'communication_delay': ['ground_support'],
    'mission_demands': ['mission_events', 'cognitive_workload', 'physical_workload'],
    'mission_events': ['conflicts', 'injuries'],
    'selection': ['crew_composition'],
    'isolated': ['monotony', 'crew_size', 'ground_support'],
    'confined': ['crew_composition', 'habitat'],
    'crew_composition': ['crew_size', 'monotony', 'social_density', 'social_support', 'group_living'],
    'extreme': ['media_attention', 'altered_gravity', 'light_dark_cycles', 'radiation'],
    'resource_constrained': ['supplies', 'training_and_preperation'],
    'extraversion': ['cohesion_processes', 'social_support'],
    'openness': ['action_processes', 'transition_processes', 'cohesion_processes', 'monotony'],
    'agreeableness': ['cohesion_processes', 'action_processes', 'group_living'],
    'neuroticism': ['sleep', 'cohesion_processes', 'transition_processes', 'stress_regulation', 'group_living'],
    'conscientiousness': ['cohesion_processes', 'group_living'],
    'resilience': ['stress_regulation'],
    'emotional_bandwidth': ['stress_regulation', 'social_support'],
    'genetics': ['physical_health'],
    'crew_size': ['social_density'],
    'social_support': ['cohesion_processes'],
    'monotony': ['cohesion_processes'],
    'social_density': ['privacy'],
    'group_living': ['cohesion_processes'],
    'habitat': ['privacy', 'volume', 'physical_ergonomics', 'layout'],
    'circulation_paths': ['reprogrammability', 'group_living'],
    'layout': ['reprogrammability', 'circulation_paths'],
    'privacy': ['placemaking', 'sleep', 'stress_regulation'],
    'physical_ergonomics': ['physical_health', 'temperature_and_humidity'],
    'fixtures': ['monotony'],
    'reprogrammability': ['placemaking'],
    'psychotherapy': ['stress_regulation'],
    'clothing': ['material_monotony'],
    'training_and_preperation': ['physical_health'],
    'family_and_friends': ['stress_regulation'],
    'ground_support': ['family_and_friends', 'psychotherapy'],
    'supplies': ['medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'food'],
    'medical_capabilites': ['physical_health'],
    'food': ['nutrition', 'material_monotony'],
    'exercise_equipment': ['physical_workload', 'physical_health'],
    'light_dark_cycles': ['sleep', 'physical_health'],
    'altered_gravity': ['physical_health', 'physical_ergonomics'],
    'contaminants': ['physical_ergonomics', 'sleep'],
    'lighting': ['material_monotony', 'physical_health', 'sleep', 'physical_ergonomics'],
    'volume': ['privacy'],
    'radiation': ['physical_health'],
    'temperature_and_humidity': ['sleep', 'material_monotony'],
    'nutrition': ['sleep', 'physical_health'],
    'material_monotony': ['boredom', 'stress_regulation'],
    'physical_workload': ['physical_health', 'sleep'],
    'media_attention': ['privacy', 'cognitive_workload'],
    'cognitive_workload': ['stress_regulation', 'sleep'],
    'conflicts': ['cohesion_processes', 'action_processes'],
    'injuries': ['physical_health'],
    'transition_processes': ['crew_performance'],
    'action_processes': ['crew_performance'],
    'cohesion_processes': ['kinship'],
    'stress_regulation': ['depression', 'anxiety', 'discontentment', 'stress'],
    'placemaking': ['trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment'],
    'sleep': ['depression', 'anxiety', 'sleep_quality'],
    'physical_health': ['sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress'],
} #cur: list of nodes it leads to

adj = {}
for key in tmp:
    if key in adj:
        adj[key].extend(tmp[key])
    else:
        adj[key] = tmp[key]
    for ele in tmp[key]:
        if ele in adj:
            adj[ele].append(key)
        else:
            adj[ele] = [key]

for key in adj: #get rid of the duplicates
    s = set()
    tmp = []
    for ele in adj[key]:
        if ele not in s:
            tmp.append(ele)
            s.add(ele)
    adj[key] = tmp

print(adj)
#directed adj graph, each element only looks to the right
dirRight = {
    'distance_from_earth': ['communication_delay', 'resource_constrained'],
    'mission_duration': ['isolated'],
    'communication_delay': ['ground_support'],
    'mission_demands': ['mission_events', 'cognitive_workload', 'physical_workload'],
    'mission_events': ['conflicts', 'injuries'],
    'selection': ['crew_size', 'monotony', 'social_density', 'social_support', 'group_living'],
    'isolated': ['monotony', 'crew_size', 'ground_support'],
    'confined': ['crew_size', 'monotony', 'social_density', 'social_support', 'group_living', 'habitat'],
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
    'medical_capabilities': ['physical_health'],
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

#directed adj graph, each element only looks to the left
dirLeft = {'communication_delay': ['distance_from_earth'], 'resource_constrained': ['distance_from_earth'], 'isolated': ['mission_duration'], 'ground_support': ['communication_delay', 'isolated'], 'mission_events': ['mission_demands'], 'cognitive_workload': ['mission_demands', 'media_attention'], 'physical_workload': ['mission_demands', 'exercise_equipment'], 'conflicts': ['mission_events'], 'injuries': ['mission_events'], 'crew_size': ['selection', 'isolated', 'confined'], 'monotony': ['selection', 'isolated', 'confined', 'openness', 'fixtures'], 'social_density': ['selection', 'confined', 'crew_size'], 'social_support': ['selection', 'confined', 'extraversion', 'emotional_bandwidth'], 'group_living': ['selection', 'confined', 'agreeableness', 'neuroticism', 'conscientiousness', 'circulation_paths'], 'habitat': ['confined'], 'media_attention': ['extreme'], 'altered_gravity': ['extreme'], 'light_dark_cycles': ['extreme'], 'radiation': ['extreme'], 'supplies': ['resource_constrained'], 'training_and_preperation': ['resource_constrained'], 'cohesion_processes': ['extraversion', 'openness', 'agreeableness', 'neuroticism', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts'], 'action_processes': ['openness', 'agreeableness', 'conflicts'], 'transition_processes': ['openness', 'neuroticism'], 'sleep': ['neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'physical_health'], 'stress_regulation': ['neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload'], 'physical_health': ['genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilities', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries'], 'privacy': ['social_density', 'habitat', 'volume', 'media_attention'], 'volume': ['habitat'], 'physical_ergonomics': ['habitat', 'altered_gravity', 'contaminants', 'lighting'], 'layout': ['habitat'], 'reprogrammability': ['circulation_paths', 'layout'], 'circulation_paths': ['layout'], 'placemaking': ['privacy', 'reprogrammability'], 'temperature_and_humidity': ['physical_ergonomics'], 'material_monotony': ['clothing', 'food', 'lighting', 'temperature_and_humidity'], 'family_and_friends': ['ground_support'], 'psychotherapy': ['ground_support'], 'medical_capabilities': ['supplies'], 'clothing': ['supplies'], 'exercise_equipment': ['supplies'], 'fixtures': ['supplies'], 'food': ['supplies'], 'nutrition': ['food'], 'boredom': ['material_monotony'], 'crew_performance': ['transition_processes', 'action_processes'], 'kinship': ['cohesion_processes'], 'depression': ['stress_regulation', 'sleep', 'physical_health'], 'anxiety': ['stress_regulation', 'sleep', 'physical_health'], 'discontentment': ['stress_regulation', 'placemaking'], 'stress': ['stress_regulation', 'physical_health'], 'trust': ['placemaking'], 'agency': ['placemaking'], 'nostalgia_homesickness': ['placemaking'], 'attachment': ['placemaking'], 'sleep_quality': ['sleep', 'physical_health'], 'tranquility': ['physical_health']}

#undirected adj graph, each element looks to the right and left for a complete path
undir = {'distance_from_earth': ['communication_delay', 'resource_constrained'], 'communication_delay': ['distance_from_earth', 'ground_support'], 'resource_constrained': ['distance_from_earth', 'supplies', 'training_and_preperation'], 'mission_duration': ['isolated'], 'isolated': ['mission_duration', 'monotony', 'crew_size', 'ground_support'], 'ground_support': ['communication_delay', 'isolated', 'family_and_friends', 'psychotherapy'], 'mission_demands': ['mission_events', 'cognitive_workload', 'physical_workload'], 'mission_events': ['mission_demands', 'conflicts', 'injuries'], 'cognitive_workload': ['mission_demands', 'media_attention', 'stress_regulation', 'sleep'], 'physical_workload': ['mission_demands', 'exercise_equipment', 'physical_health', 'sleep'], 'conflicts': ['mission_events', 'cohesion_processes', 'action_processes'], 'injuries': ['mission_events', 'physical_health'], 'selection': ['crew_composition'], 'crew_composition': ['selection', 'confined', 'crew_size', 'monotony', 'social_density', 'social_support', 'group_living'], 'monotony': ['isolated', 'crew_composition', 'openness', 'cohesion_processes', 'fixtures'], 'crew_size': ['isolated', 'crew_composition', 'social_density'], 'confined': ['crew_composition', 'habitat'], 'habitat': ['confined', 'privacy', 'volume', 'physical_ergonomics', 'layout'], 'social_density': ['crew_composition', 'crew_size', 'privacy'], 'social_support': ['crew_composition', 'extraversion', 'emotional_bandwidth', 'cohesion_processes'], 'group_living': ['crew_composition', 'agreeableness', 'neuroticism', 'conscientiousness', 'cohesion_processes', 'circulation_paths'], 'extreme': ['media_attention', 'altered_gravity', 'light_dark_cycles', 'radiation'], 'media_attention': ['extreme', 'privacy', 'cognitive_workload'], 'altered_gravity': ['extreme', 'physical_health', 'physical_ergonomics'], 'light_dark_cycles': ['extreme', 'sleep', 'physical_health'], 'radiation': ['extreme', 'physical_health'], 'supplies': ['resource_constrained', 'medical_capabilities', 'clothing', 'exercise_equipment', 'fixtures', 'food'], 'training_and_preperation': ['resource_constrained', 'physical_health'], 'extraversion': ['cohesion_processes', 'social_support'], 'cohesion_processes': ['extraversion', 'openness', 'agreeableness', 'neuroticism', 'conscientiousness', 'social_support', 'monotony', 'group_living', 'conflicts', 'kinship'], 'openness': ['action_processes', 'transition_processes', 'cohesion_processes', 'monotony'], 'action_processes': ['openness', 'agreeableness', 'conflicts', 'crew_performance'], 'transition_processes': ['openness', 'neuroticism', 'crew_performance'], 'agreeableness': ['cohesion_processes', 'action_processes', 'group_living'], 'neuroticism': ['sleep', 'cohesion_processes', 'transition_processes', 'stress_regulation', 'group_living'], 'sleep': ['neuroticism', 'privacy', 'light_dark_cycles', 'contaminants', 'lighting', 'temperature_and_humidity', 'nutrition', 'physical_workload', 'cognitive_workload', 'depression', 'anxiety', 'sleep_quality', 'physical_health'], 'stress_regulation': ['neuroticism', 'resilience', 'emotional_bandwidth', 'privacy', 'psychotherapy', 'family_and_friends', 'material_monotony', 'cognitive_workload', 'depression', 'anxiety', 'discontentment', 'stress'], 'conscientiousness': ['cohesion_processes', 'group_living'], 'resilience': ['stress_regulation'], 'emotional_bandwidth': ['stress_regulation', 'social_support'], 'genetics': ['physical_health'], 'physical_health': ['genetics', 'physical_ergonomics', 'training_and_preperation', 'medical_capabilities', 'exercise_equipment', 'light_dark_cycles', 'altered_gravity', 'lighting', 'radiation', 'nutrition', 'physical_workload', 'injuries', 'sleep', 'depression', 'anxiety', 'tranquility', 'sleep_quality', 'stress'], 'privacy': ['social_density', 'habitat', 'placemaking', 'sleep', 'stress_regulation', 'volume', 'media_attention'], 'volume': ['habitat', 'privacy'], 'physical_ergonomics': ['habitat', 'physical_health', 'temperature_and_humidity', 'altered_gravity', 'contaminants', 'lighting'], 'layout': ['habitat', 'reprogrammability', 'circulation_paths'], 'circulation_paths': ['reprogrammability', 'group_living', 'layout'], 'reprogrammability': ['circulation_paths', 'layout', 'placemaking'], 'placemaking': ['privacy', 'reprogrammability', 'trust', 'agency', 'discontentment', 'nostalgia_homesickness', 'attachment'], 'temperature_and_humidity': ['physical_ergonomics', 'sleep', 'material_monotony'], 'fixtures': ['monotony', 'supplies'], 'psychotherapy': ['stress_regulation', 'ground_support'], 'clothing': ['material_monotony', 'supplies'], 'material_monotony': ['clothing', 'food', 'lighting', 'temperature_and_humidity', 'boredom', 'stress_regulation'], 'family_and_friends': ['stress_regulation', 'ground_support'], 'medical_capabilities': ['supplies'], 'exercise_equipment': ['supplies', 'physical_workload', 'physical_health'], 'food': ['supplies', 'nutrition', 'material_monotony'], 'medical_capabilities': ['physical_health'], 'nutrition': ['food', 'sleep', 'physical_health'], 'contaminants': ['physical_ergonomics', 'sleep'], 'lighting': ['material_monotony', 'physical_health', 'sleep', 'physical_ergonomics'], 'boredom': ['material_monotony'], 'crew_performance': ['transition_processes', 'action_processes'], 'kinship': ['cohesion_processes'], 'depression': ['stress_regulation', 'sleep', 'physical_health'], 'anxiety': ['stress_regulation', 'sleep', 'physical_health'], 'discontentment': ['stress_regulation', 'placemaking'], 'stress': ['stress_regulation', 'physical_health'], 'trust': ['placemaking'], 'agency': ['placemaking'], 'nostalgia_homesickness': ['placemaking'], 'attachment': ['placemaking'], 'sleep_quality': ['sleep', 'physical_health'], 'tranquility': ['physical_health']}

#for each element, find all other elements it is directly/indirectly connected to
curVar = 'selection'
ans1 = [curVar]
q = [curVar]
vis = set()
while q:
    cur = q[0]
    q.pop(0)
    if cur not in dirRight:
        continue
    for ele in dirRight[cur]:
        if ele in vis:
            continue
        ans1.append(ele)
        q.append(ele)
        vis.add(cur)

ans2 = [curVar]
q = [curVar]
vis = set()
while q:
    cur = q[0]
    q.pop(0)
    if cur not in dirLeft:
        continue
    for ele in dirLeft[cur]:
        if ele in vis:
            continue
        ans2.append(ele)
        q.append(ele)
        vis.add(cur)

tmpSet = set()
ans = []
for ele in ans1:
    if ele not in tmpSet:
        tmpSet.add(ele)
        ans.append(ele)
for ele in ans2:
    if ele not in tmpSet:
        tmpSet.add(ele)
        ans.append(ele)
print(ans)

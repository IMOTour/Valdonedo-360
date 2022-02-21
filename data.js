var APP_DATA = {
  "scenes": [
    {
      "id": "0-gate",
      "name": "gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.220573205367387,
        "pitch": -0.04159870085273454,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -0.5392101588758216,
          "pitch": 0.08927746029040051,
          "rotation": 3.141592653589793,
          "target": "1-inside-gate"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 0.28066905054522806,
          "pitch": 0.006545241120175405,
          "title": "garage",
          "text": "Garage can be accessed from the outside"
        }
      ]
    },
    {
      "id": "1-inside-gate",
      "name": "inside gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.4828126805320245,
        "pitch": 0.18484946212868358,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -1.900773632690525,
          "pitch": 0.16611031486389294,
          "rotation": 3.141592653589793,
          "target": "0-gate"
        },
        {
          "yaw": 1.9904452045212322,
          "pitch": 0.071039016022862,
          "rotation": 5.497787143782138,
          "target": "2-sitting-room-entrance"
        },
        {
          "yaw": 0.6024125502249262,
          "pitch": 0.11268784711424473,
          "rotation": 0.7853981633974483,
          "target": "25-sitting-room-field-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-sitting-room-entrance",
      "name": "sitting room entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.8939127895398835,
        "pitch": 0.044559451552849794,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.6696488138105927,
          "pitch": 0.12416299935312303,
          "rotation": 3.141592653589793,
          "target": "1-inside-gate"
        },
        {
          "yaw": -2.9580778810197472,
          "pitch": -0.03633433630151828,
          "rotation": 10.995574287564278,
          "target": "3-service-entrance"
        },
        {
          "yaw": 2.7112444072437825,
          "pitch": -0.20893497496231106,
          "rotation": 5.497787143782138,
          "target": "40-sitting-room"
        },
        {
          "yaw": 2.9352584480895256,
          "pitch": -0.18709390977230989,
          "rotation": 0,
          "target": "41-under-stairs-entrance"
        }
      ],
      "infoHotspots": [
        {
          "yaw": -0.8265378439017788,
          "pitch": 0.09486664356438013,
          "title": "garage",
          "text": "internal access"
        }
      ]
    },
    {
      "id": "3-service-entrance",
      "name": "service entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.5327845732590921,
        "pitch": -0.1590313552140472,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -0.34545086022170857,
          "pitch": 0.11347855755222369,
          "rotation": 0.7853981633974483,
          "target": "2-sitting-room-entrance"
        },
        {
          "yaw": 2.6129426101224027,
          "pitch": -0.016971866870509444,
          "rotation": 10.995574287564278,
          "target": "4-dining-room-entrance"
        },
        {
          "yaw": 2.2729679832562493,
          "pitch": -0.13676264731098264,
          "rotation": 4.71238898038469,
          "target": "32-kitchen"
        },
        {
          "yaw": 1.8333923172160667,
          "pitch": -0.11766397547368612,
          "rotation": 0,
          "target": "26-workers-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dining-room-entrance",
      "name": "dining room entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.24788226888906095,
        "pitch": -0.08319740170548684,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -1.5844693748486591,
          "pitch": 0.035684376702722176,
          "rotation": 3.141592653589793,
          "target": "3-service-entrance"
        },
        {
          "yaw": 2.1418928128842225,
          "pitch": 0.09733573058282907,
          "rotation": 0,
          "target": "5-service-areas"
        },
        {
          "yaw": -0.10185906785463317,
          "pitch": -0.14946731876131558,
          "rotation": 0,
          "target": "34-dining-room"
        },
        {
          "yaw": 1.065993313819348,
          "pitch": 0.1065434089912447,
          "rotation": 3.141592653589793,
          "target": "6-stable-and-storage"
        },
        {
          "yaw": -1.2252777495126246,
          "pitch": -0.08743744561443734,
          "rotation": 0.7853981633974483,
          "target": "32-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-service-areas",
      "name": "service areas",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.7038671880070826,
        "pitch": -0.06655792136439764,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.826562752340008,
          "pitch": 0.0890083655879188,
          "rotation": 0,
          "target": "4-dining-room-entrance"
        },
        {
          "yaw": 1.393660923528861,
          "pitch": 0.029083973974438848,
          "rotation": 0.7853981633974483,
          "target": "3-service-entrance"
        },
        {
          "yaw": 2.733587400749176,
          "pitch": 0.04116915626948625,
          "rotation": 3.141592653589793,
          "target": "6-stable-and-storage"
        },
        {
          "yaw": -1.3799179922311229,
          "pitch": 0.06483184425339239,
          "rotation": 0,
          "target": "9-oven"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-stable-and-storage",
      "name": "stable and storage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.72894276703569,
        "pitch": -0.04437194757626628,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.5876362680158795,
          "pitch": 0.08861991877606279,
          "rotation": 4.71238898038469,
          "target": "5-service-areas"
        },
        {
          "yaw": 0.8673215888987773,
          "pitch": 0.23356239666744827,
          "rotation": 3.141592653589793,
          "target": "6-stable-and-storage"
        },
        {
          "yaw": 1.8210400340617925,
          "pitch": 0.07837153369932892,
          "rotation": 2.356194490192345,
          "target": "4-dining-room-entrance"
        },
        {
          "yaw": -1.9889023634275613,
          "pitch": 0.04149302992667003,
          "rotation": 3.141592653589793,
          "target": "7-south-corner"
        },
        {
          "yaw": -1.4639476154438853,
          "pitch": -0.21270822502271258,
          "rotation": 3.141592653589793,
          "target": "8-above-storage"
        },
        {
          "yaw": -0.7668189668088452,
          "pitch": 0.16769420747899844,
          "rotation": 0,
          "target": "18-access-main-house"
        },
        {
          "yaw": -3.0566606861228287,
          "pitch": -0.6850368448081046,
          "rotation": 10.210176124166829,
          "target": "52-terrace-south-view"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-south-corner",
      "name": "south corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.6387658609679505,
        "pitch": -0.12319665032536165,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.7002385976501495,
          "pitch": 0.017958922053662008,
          "rotation": 0,
          "target": "5-service-areas"
        },
        {
          "yaw": -2.9869857439501875,
          "pitch": 0.007243706180648957,
          "rotation": 0.7853981633974483,
          "target": "4-dining-room-entrance"
        },
        {
          "yaw": -1.804867664618424,
          "pitch": 0.18127102111014537,
          "rotation": 11.780972450961727,
          "target": "23-dining-room-field-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-above-storage",
      "name": "above storage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.2814666028035617,
        "pitch": 0.04714418926501196,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -0.8777317317367448,
          "pitch": 0.18130372638344738,
          "rotation": 1.5707963267948966,
          "target": "4-dining-room-entrance"
        },
        {
          "yaw": -1.5113097762733751,
          "pitch": 0.09204658218760287,
          "rotation": 3.9269908169872414,
          "target": "5-service-areas"
        },
        {
          "yaw": 0.4067448069640065,
          "pitch": 0.39737418555967174,
          "rotation": 3.141592653589793,
          "target": "7-south-corner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-oven",
      "name": "oven",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.07594087019975859,
        "pitch": 0.2067357269651957,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.568968441861431,
          "pitch": -0.019646848104706294,
          "rotation": 0,
          "target": "5-service-areas"
        },
        {
          "yaw": -1.8802275478582189,
          "pitch": -0.015634647454707107,
          "rotation": 0,
          "target": "10-grain-store"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-grain-store",
      "name": "grain store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3156093255497332,
        "pitch": 0.07095642722263662,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.2099125991477457,
          "pitch": -0.058841700401188746,
          "rotation": 0,
          "target": "9-oven"
        },
        {
          "yaw": -0.805438456535434,
          "pitch": 0.029250263411551458,
          "rotation": 0,
          "target": "11-keepers-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-keepers-hall",
      "name": "keeper's hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.772192387036613,
        "pitch": 0.16023691059824152,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.8186828492931397,
          "pitch": -0.08550136349302129,
          "rotation": 0.7853981633974483,
          "target": "10-grain-store"
        },
        {
          "yaw": 0.11492792557800513,
          "pitch": -0.1572618483256889,
          "rotation": 5.497787143782138,
          "target": "12-keepers-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-keepers-sitting-room",
      "name": "keeper's sitting room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9761640698637155,
        "pitch": 0.06643006517359851,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.28643628588561043,
          "pitch": -0.07383265874261014,
          "rotation": 0.7853981633974483,
          "target": "11-keepers-hall"
        },
        {
          "yaw": 0.03652353828130117,
          "pitch": -0.09126933492983014,
          "rotation": 5.497787143782138,
          "target": "13-keepers-bedroom"
        },
        {
          "yaw": 2.3855842554408735,
          "pitch": -0.12607917110516453,
          "rotation": 0.7853981633974483,
          "target": "14-keepers-kitchen"
        },
        {
          "yaw": 1.980076448542766,
          "pitch": -0.08841270747393537,
          "rotation": 5.497787143782138,
          "target": "15-keepers-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-keepers-bedroom",
      "name": "keeper's bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.676227012810056,
        "pitch": 0.12926269515940447,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.738633393819243,
          "pitch": -0.18011095170528257,
          "rotation": 0.7853981633974483,
          "target": "12-keepers-sitting-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-keepers-kitchen",
      "name": "keeper's kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.509355550468057,
        "pitch": 0.25191364909774094,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -1.4194679602704987,
          "pitch": -0.15045603160107213,
          "rotation": 5.497787143782138,
          "target": "12-keepers-sitting-room"
        },
        {
          "yaw": -0.6851960339174052,
          "pitch": -0.05509710757088193,
          "rotation": 0,
          "target": "15-keepers-patio"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-keepers-patio",
      "name": "keeper's patio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1973974005658157,
        "pitch": 0.4548175996914985,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.6506680906031042,
          "pitch": -0.037732977405251944,
          "rotation": 0,
          "target": "14-keepers-kitchen"
        },
        {
          "yaw": 2.857726836955468,
          "pitch": -0.23838164632920922,
          "rotation": 0.7853981633974483,
          "target": "12-keepers-sitting-room"
        },
        {
          "yaw": -2.079907553544146,
          "pitch": 0.5321046437794994,
          "rotation": 0,
          "target": "16-lower-storage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-lower-storage",
      "name": "lower storage",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.27475103125871314,
        "pitch": 0.13579608690204914,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -2.7385229297504736,
          "pitch": -0.4773587622275848,
          "rotation": 0.7853981633974483,
          "target": "12-keepers-sitting-room"
        },
        {
          "yaw": 0.19284481144732446,
          "pitch": 0.042778113785326255,
          "rotation": 0,
          "target": "17-lower-storage-2"
        },
        {
          "yaw": 3.0709420940602037,
          "pitch": 0.1304836526108346,
          "rotation": 0,
          "target": "19-storage-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-lower-storage-2",
      "name": "lower storage 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.27373628696736674,
        "pitch": 0.2027949610967319,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.6758616111612881,
          "pitch": 0.04960971704496231,
          "rotation": 5.497787143782138,
          "target": "18-access-main-house"
        },
        {
          "yaw": 2.9452643592259253,
          "pitch": 0.12658749333954766,
          "rotation": 0,
          "target": "16-lower-storage"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-access-main-house",
      "name": "access main house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5683268420732865,
        "pitch": 0.1469820763463474,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.16743692033724855,
          "pitch": -0.20737373920370672,
          "rotation": 0,
          "target": "6-stable-and-storage"
        },
        {
          "yaw": -1.455778967865836,
          "pitch": 0.08483756264795161,
          "rotation": 0,
          "target": "17-lower-storage-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-storage-3",
      "name": "storage 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.3624676357697858,
        "pitch": 0.18998576388634802,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.853568212441239,
          "pitch": 0.04107836504475948,
          "rotation": 3.141592653589793,
          "target": "20-keepers-patio-corner"
        },
        {
          "yaw": 0.2491737518201571,
          "pitch": 0.146672080875641,
          "rotation": 0,
          "target": "16-lower-storage"
        },
        {
          "yaw": -2.5304190501593578,
          "pitch": 0.12054314415812684,
          "rotation": 0,
          "target": "21-hay-store"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "20-keepers-patio-corner",
      "name": "keeper's patio corner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.3115232885179786,
        "pitch": 0.17099195332860972,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.5508797922608473,
          "pitch": 0.10209706080464898,
          "rotation": 3.141592653589793,
          "target": "19-storage-3"
        },
        {
          "yaw": -0.45627779345994846,
          "pitch": 0.18880576850230568,
          "rotation": 3.141592653589793,
          "target": "21-hay-store"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "21-hay-store",
      "name": "hay store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.2646878464408964,
        "pitch": -0.06655792136441008,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.9796560280961071,
          "pitch": 0.13227576846686162,
          "rotation": 0,
          "target": "22-sheep-house"
        },
        {
          "yaw": -0.757977485233809,
          "pitch": 0.07865700627241523,
          "rotation": 3.141592653589793,
          "target": "20-keepers-patio-corner"
        },
        {
          "yaw": -1.7012745493746841,
          "pitch": 0.17676650912175162,
          "rotation": 4.71238898038469,
          "target": "19-storage-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "22-sheep-house",
      "name": "sheep house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.1175709071947573,
        "pitch": 0.23017947805187333,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.2515831895691596,
          "pitch": -0.010448813130416568,
          "rotation": 0.7853981633974483,
          "target": "21-hay-store"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "23-dining-room-field-side",
      "name": "dining room field side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.024012567322611,
        "pitch": 0.004066247970536452,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.26457193549465075,
          "pitch": -0.1342429657883759,
          "rotation": 3.141592653589793,
          "target": "8-above-storage"
        },
        {
          "yaw": 0.41765679731078365,
          "pitch": 0.13942031070164163,
          "rotation": 3.141592653589793,
          "target": "7-south-corner"
        },
        {
          "yaw": 1.1629315754777316,
          "pitch": 0.10520667389184091,
          "rotation": 3.141592653589793,
          "target": "6-stable-and-storage"
        },
        {
          "yaw": -2.929985635333253,
          "pitch": 0.08110031901245662,
          "rotation": 0,
          "target": "24-field-view"
        },
        {
          "yaw": 2.542619903789925,
          "pitch": -0.21670492446673784,
          "rotation": 0,
          "target": "34-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "24-field-view",
      "name": "field view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.5822743670816166,
        "pitch": 0.3484097480135162,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.5196167797293203,
          "pitch": 0.06708815809320612,
          "rotation": 0,
          "target": "23-dining-room-field-side"
        },
        {
          "yaw": -1.842941790687453,
          "pitch": 0.09514505037478216,
          "rotation": 0,
          "target": "25-sitting-room-field-side"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "25-sitting-room-field-side",
      "name": "sitting room field side",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.93946897143055,
        "pitch": -0.17136512027982143,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.3998391469949816,
          "pitch": 0.02260953236101315,
          "rotation": 0,
          "target": "24-field-view"
        },
        {
          "yaw": -1.6376853628728014,
          "pitch": 0.08549179484542435,
          "rotation": 3.141592653589793,
          "target": "1-inside-gate"
        },
        {
          "yaw": -1.2536380180426665,
          "pitch": 0.06323648753558331,
          "rotation": 3.141592653589793,
          "target": "0-gate"
        },
        {
          "yaw": 3.1070976310072442,
          "pitch": -0.2110371165247642,
          "rotation": 0,
          "target": "40-sitting-room"
        },
        {
          "yaw": 2.7697200822885994,
          "pitch": -0.19608428166958625,
          "rotation": 0,
          "target": "38-hall"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "26-workers-area",
      "name": "worker's area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.210001583729671,
        "pitch": 0.11924960911120763,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.4794426439872197,
          "pitch": -0.06534302140835635,
          "rotation": 0,
          "target": "3-service-entrance"
        },
        {
          "yaw": -0.17228181230153972,
          "pitch": 0.0004218275301433039,
          "rotation": 0,
          "target": "27-store"
        },
        {
          "yaw": -2.130329903488846,
          "pitch": -0.19710355922935108,
          "rotation": 4.71238898038469,
          "target": "28-workers-wc"
        },
        {
          "yaw": -1.2616625237266668,
          "pitch": -0.2912246663084552,
          "rotation": 0.7853981633974483,
          "target": "29-workers-room"
        },
        {
          "yaw": -1.736537599111486,
          "pitch": -0.07943874565713216,
          "rotation": 0,
          "target": "30-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "27-store",
      "name": "store",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.9322532520262428,
        "pitch": 0.00831974017054904,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.6100341840555394,
          "pitch": -0.19533824638185315,
          "rotation": 0,
          "target": "26-workers-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "28-workers-wc",
      "name": "worker's wc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.2535870408496486,
        "pitch": 0.4221402948588793,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.0141195264675709,
          "pitch": 0.042307402143856976,
          "rotation": 10.995574287564278,
          "target": "26-workers-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "29-workers-room",
      "name": "worker's room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.8104311610946731,
        "pitch": 0.1996737640931805,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.6733777776954692,
          "pitch": -0.10886496866102924,
          "rotation": 10.210176124166829,
          "target": "26-workers-area"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "30-corridor-1",
      "name": "corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.24788226888906095,
        "pitch": 0.03605220740571724,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.2679220921557146,
          "pitch": -0.08988939114761507,
          "rotation": 7.0685834705770345,
          "target": "37-bedroom-1"
        },
        {
          "yaw": 2.1953061359952155,
          "pitch": 0.40623121192614775,
          "rotation": 3.141592653589793,
          "target": "31-corridor-2"
        },
        {
          "yaw": -2.5817353840590247,
          "pitch": 0.6693143189593318,
          "rotation": 3.141592653589793,
          "target": "26-workers-area"
        },
        {
          "yaw": -2.8424794667146784,
          "pitch": -0.5055816021564166,
          "rotation": 4.71238898038469,
          "target": "29-workers-room"
        },
        {
          "yaw": -1.0005140327661142,
          "pitch": 0.4029680943622225,
          "rotation": 0,
          "target": "39-corridor-0"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "31-corridor-2",
      "name": "corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.745679368193315,
        "pitch": 0.10538337549363419,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -2.716403841457682,
          "pitch": 0.34523881276131085,
          "rotation": 0,
          "target": "36-tea-room"
        },
        {
          "yaw": 2.102460908080465,
          "pitch": 0.4055917332879382,
          "rotation": 0,
          "target": "30-corridor-1"
        },
        {
          "yaw": -1.028268395735239,
          "pitch": 0.4086344304280569,
          "rotation": 3.141592653589793,
          "target": "33-corridor-3"
        },
        {
          "yaw": -0.5985914561997987,
          "pitch": 0.00432244038169749,
          "rotation": 0.7853981633974483,
          "target": "32-kitchen"
        },
        {
          "yaw": -1.2360944358576624,
          "pitch": 0.0019747650660164595,
          "rotation": 5.497787143782138,
          "target": "35-pantry"
        },
        {
          "yaw": -1.0249397139505803,
          "pitch": -0.07784780594233709,
          "rotation": 0,
          "target": "34-dining-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "32-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6306861749318102,
        "pitch": 0.05823818119384505,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.3866793696046606,
          "pitch": -0.024312985852445124,
          "rotation": 0,
          "target": "3-service-entrance"
        },
        {
          "yaw": -0.7756946375092468,
          "pitch": 0.006322810307327842,
          "rotation": 10.995574287564278,
          "target": "33-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "33-corridor-3",
      "name": "corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.3252780622499234,
        "pitch": 0.22673731167037303,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -1.621886724014976,
          "pitch": 0.14924697668725706,
          "rotation": 0.7853981633974483,
          "target": "35-pantry"
        },
        {
          "yaw": 0.3174691581924982,
          "pitch": 0.012866454084225154,
          "rotation": 0.7853981633974483,
          "target": "34-dining-room"
        },
        {
          "yaw": -2.7992849293772135,
          "pitch": 0.3283875905795597,
          "rotation": 3.141592653589793,
          "target": "31-corridor-2"
        },
        {
          "yaw": 3.003054937898722,
          "pitch": 0.00421804197409692,
          "rotation": 4.71238898038469,
          "target": "32-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "34-dining-room",
      "name": "dining room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.6006509874688648,
        "pitch": -0.04326561828444042,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -2.274810218461539,
          "pitch": -0.07795850180990982,
          "rotation": 0,
          "target": "4-dining-room-entrance"
        },
        {
          "yaw": 0.7084402797006089,
          "pitch": 0.015578207106317521,
          "rotation": 0,
          "target": "23-dining-room-field-side"
        },
        {
          "yaw": -0.7269645489629681,
          "pitch": -0.030433175840478555,
          "rotation": 0,
          "target": "33-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "35-pantry",
      "name": "pantry",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.0022054368999882,
        "pitch": 0,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -1.4418789412696071,
          "pitch": -0.0262020541980732,
          "rotation": 0.7853981633974483,
          "target": "33-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "36-tea-room",
      "name": "tea room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.1106750898874456,
        "pitch": 0.38072961248374604,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -1.6549137418740507,
          "pitch": -0.012757437857469967,
          "rotation": 3.141592653589793,
          "target": "31-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "37-bedroom-1",
      "name": "bedroom 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.5960405321513456,
        "pitch": 0.05540394029156204,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -1.5254529735768152,
          "pitch": -0.007791426089662323,
          "rotation": 0,
          "target": "30-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "38-hall",
      "name": "hall",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.7129256773492907,
        "pitch": -0.03882545412923122,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 3.0912082081344607,
          "pitch": -0.10688428473839195,
          "rotation": 0,
          "target": "25-sitting-room-field-side"
        },
        {
          "yaw": 0.9253057415259853,
          "pitch": 0.47802666367759805,
          "rotation": 0,
          "target": "39-corridor-0"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "39-corridor-0",
      "name": "corridor 0",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.09452960416622957,
        "pitch": -0.0415987008527523,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -0.9509484266815882,
          "pitch": 0.36677850868398565,
          "rotation": 3.141592653589793,
          "target": "30-corridor-1"
        },
        {
          "yaw": -2.6686870343009286,
          "pitch": -0.14571615438838492,
          "rotation": 0.7853981633974483,
          "target": "38-hall"
        },
        {
          "yaw": 2.583876516138173,
          "pitch": -0.019310227485775044,
          "rotation": 0,
          "target": "40-sitting-room"
        },
        {
          "yaw": 0.6875650285056913,
          "pitch": 0.1672669825534605,
          "rotation": 0.7853981633974483,
          "target": "41-under-stairs-entrance"
        },
        {
          "yaw": 0.4069247864309258,
          "pitch": -0.12169785113976417,
          "rotation": 0,
          "target": "42-stairs-midway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "40-sitting-room",
      "name": "sitting room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.053579667479571214,
        "pitch": -0.024407567100503513,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.4201153800861928,
          "pitch": -0.00939413894044705,
          "rotation": 0,
          "target": "25-sitting-room-field-side"
        },
        {
          "yaw": -1.615885679321762,
          "pitch": 0.0013165886195398713,
          "rotation": 0,
          "target": "2-sitting-room-entrance"
        },
        {
          "yaw": 2.9130462956423653,
          "pitch": 0.044899757720243016,
          "rotation": 0.7853981633974483,
          "target": "39-corridor-0"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "41-under-stairs-entrance",
      "name": "under stairs entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.8974182974934415,
        "pitch": 0.2451090230929509,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.5044356794401033,
          "pitch": 0.02891035275816911,
          "rotation": 0,
          "target": "2-sitting-room-entrance"
        },
        {
          "yaw": -2.194493540734179,
          "pitch": 0.3356048552243873,
          "rotation": 0,
          "target": "39-corridor-0"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "42-stairs-midway",
      "name": "stairs midway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 3.046674293027314,
        "pitch": 0.26749595010419824,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.3905716000227546,
          "pitch": 0.6917414032242988,
          "rotation": 8.63937979737193,
          "target": "39-corridor-0"
        },
        {
          "yaw": -2.35783166346269,
          "pitch": 0.3271652617215004,
          "rotation": 4.71238898038469,
          "target": "43-wc---mezanine"
        },
        {
          "yaw": 1.9160130750003894,
          "pitch": -0.43770365572348524,
          "rotation": 0.7853981633974483,
          "target": "44-upper-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "43-wc---mezanine",
      "name": "wc - mezanine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.404838839495266,
        "pitch": 0.2634584387340695,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -1.5993672859737273,
          "pitch": -0.06288875516014514,
          "rotation": 0.7853981633974483,
          "target": "42-stairs-midway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "44-upper-corridor-1",
      "name": "upper corridor 1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.7780379968193323,
          "pitch": 0.7876173075956974,
          "rotation": 5.497787143782138,
          "target": "42-stairs-midway"
        },
        {
          "yaw": 1.8926259970290236,
          "pitch": 0.26255228958565624,
          "rotation": 0,
          "target": "52-terrace-south-view"
        },
        {
          "yaw": 0.13468630026800454,
          "pitch": 0.1503511925387695,
          "rotation": 0,
          "target": "46-oratory"
        },
        {
          "yaw": -2.930656271748374,
          "pitch": 0.4589345440406092,
          "rotation": 0,
          "target": "47-bedroom-2"
        },
        {
          "yaw": -1.344029786977,
          "pitch": 0.3475573283201854,
          "rotation": 3.141592653589793,
          "target": "48-upper-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "45-terrace-gate-view",
      "name": "terrace gate view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.9571778373074373,
        "pitch": 0.13989246792124987,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.46278035970505904,
          "pitch": 0.08810788524344204,
          "rotation": 0,
          "target": "51-upper-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "46-oratory",
      "name": "oratory",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.2784436085816786,
        "pitch": -0.004285926754530323,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -2.653586428321386,
          "pitch": 0.27080581129826875,
          "rotation": 0,
          "target": "44-upper-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "47-bedroom-2",
      "name": "bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -3.024520040809481,
        "pitch": 0.06066739502597329,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 2.796500613526958,
          "pitch": 0.4567735387166678,
          "rotation": 0,
          "target": "44-upper-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "48-upper-corridor-2",
      "name": "upper corridor 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -1.5292494269727808,
        "pitch": 0.24493350912506529,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 1.9311576302790305,
          "pitch": 0.3630725409855007,
          "rotation": 3.141592653589793,
          "target": "44-upper-corridor-1"
        },
        {
          "yaw": -2.6382977226128723,
          "pitch": 0.022863033965773383,
          "rotation": 0.7853981633974483,
          "target": "49-bedroom-3"
        },
        {
          "yaw": -1.268135779225311,
          "pitch": 0.2167331707232627,
          "rotation": 3.141592653589793,
          "target": "51-upper-corridor-3"
        },
        {
          "yaw": 0.18440261574630767,
          "pitch": -0.06088255507218676,
          "rotation": 0.7853981633974483,
          "target": "54-bedroom-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "49-bedroom-3",
      "name": "bedroom 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 1.17916086525506,
        "pitch": 0.18828268436449136,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": 0.7948642982707081,
          "pitch": 0.010000485465482711,
          "rotation": 0.7853981633974483,
          "target": "50-bedroom-4"
        },
        {
          "yaw": 2.8246330761376086,
          "pitch": -0.003391880418933013,
          "rotation": 5.497787143782138,
          "target": "48-upper-corridor-2"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "50-bedroom-4",
      "name": "bedroom 4",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -0.12678369008913215,
        "pitch": -0.03327896068219971,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -0.47317318007296905,
          "pitch": -0.1250288148821408,
          "rotation": 10.995574287564278,
          "target": "49-bedroom-3"
        },
        {
          "yaw": -2.1475555349704223,
          "pitch": 0.02850490937064265,
          "rotation": 5.497787143782138,
          "target": "51-upper-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "51-upper-corridor-3",
      "name": "upper corridor 3",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.08821977799168579,
        "pitch": 0.019412727064619162,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -2.8223111115080304,
          "pitch": 0.226230509788941,
          "rotation": 3.141592653589793,
          "target": "48-upper-corridor-2"
        },
        {
          "yaw": -1.5068347565562483,
          "pitch": -0.061730581355137204,
          "rotation": 0.7853981633974483,
          "target": "50-bedroom-4"
        },
        {
          "yaw": 0.8607512914777509,
          "pitch": 0.08382241373960753,
          "rotation": 0.7853981633974483,
          "target": "53-main-wc"
        },
        {
          "yaw": 0.5070894529666212,
          "pitch": 0.0788747122372726,
          "rotation": 0,
          "target": "45-terrace-gate-view"
        },
        {
          "yaw": 2.3168916638649772,
          "pitch": 0.03571965923147857,
          "rotation": 0,
          "target": "54-bedroom-5"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "52-terrace-south-view",
      "name": "terrace south view",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 0.6162109221648002,
        "pitch": 0.20265290676362824,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -2.4516045083742632,
          "pitch": 0.08725552888065025,
          "rotation": 0,
          "target": "44-upper-corridor-1"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "53-main-wc",
      "name": "main wc",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": 2.387877124718747,
        "pitch": 0.21320036485912652,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -0.06934198314456808,
          "pitch": 0.011208025192095405,
          "rotation": 0,
          "target": "51-upper-corridor-3"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "54-bedroom-5",
      "name": "bedroom 5",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.6072743821720685,
        "pitch": 0.04009469500111251,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -2.3190093213876946,
          "pitch": 0.08567778373365087,
          "rotation": 0,
          "target": "51-upper-corridor-3"
        },
        {
          "yaw": 1.4634303481903883,
          "pitch": 0.01004611003142486,
          "rotation": 0.7853981633974483,
          "target": "55-bedroom-6"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "55-bedroom-6",
      "name": "bedroom 6",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1344,
      "initialViewParameters": {
        "yaw": -2.608928061838064,
        "pitch": 0.18806040492366094,
        "fov": 1.5252856979340437
      },
      "linkHotspots": [
        {
          "yaw": -2.0336582896619575,
          "pitch": 0.03935335755142155,
          "rotation": 0.7853981633974483,
          "target": "48-upper-corridor-2"
        },
        {
          "yaw": -0.07729559405245823,
          "pitch": 0.07047314517165049,
          "rotation": 5.497787143782138,
          "target": "54-bedroom-5"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};

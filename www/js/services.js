angular.module('starter.services', [])
    .factory('Categories', function($log) {

      var categories=
          [
            {
              "id":0,
              "weight":10,
              "fr":{"name":"Bien-être"},
              "en":{"name":"Wellness"}

            },
            {
              "id":1,
              "weight":20,
              "fr":{"name":"Beauté"},
              "en":{"name":"Beauty"},
              "subCategories":[
                {
                  "id":0,
                  "weight":10,
                  "fr":{"name":"<3"},
                  "en":{"name":"<3"},
                  "color":"#FFFFFF",
                  services:[{
                    "id":0,
                    "weight":10,
                    "fr":{"name":"BARBIER. Moustache","info":""},
                    "en":{"name":"BARBER. Moustache","info":""}
                  }]
                },
                {
                  "id":1,
                  "weight":20,
                  "fr":{"name":"Hommes"},
                  "en":{"name":"Men"},
                  "color":"#607D8B",
                  "services":[
                    {
                      "id":0,
                      "weight":10,
                      "fr":{"name":"BARBIER. Moustache","info":""},
                      "en":{"name":"BARBER. Moustache","info":""}
                    },
                    {
                      "id":1,
                      "weight":20,
                      "fr":{"name":"BARBIER. Rasage Traditionnel","info":""},
                      "en":{"name":"EN?? BARBIER. Rasage Traditionnel","info":""}
                    },
                    {
                      "id":2,
                      "weight":30,
                      "fr":{"name":"BARBIER. Rasage Traditionnel avec tracé spécifique","info":""},
                      "en":{"name":"EN?? BARBIER. Rasage Traditionnel avec tracé spécifique","info":""}
                    },
                    {
                      "id":3,
                      "weight":40,
                      "fr":{"name":"BARBIER. Taille de la Barbe courte","info":"Longueur de la barbe : 2mm maximum."},
                      "en":{"name":"EN?? BARBIER. Taille de la Barbe courte","info":"Maximum length : 2mm."}
                    },
                    {
                      "id":4,
                      "weight":50,
                      "fr":{"name":"BARBIER. Taille de la Barbe longue","info":""},
                      "en":{"name":"EN?? BARBIER. Taille de la Barbe longue","info":""}
                    },
                    {
                      "id":5,
                      "weight":60,
                      "fr":{"name":"BARBIER. Taille de la Barbe Travaillée","info":"Contour de la barbe délimité à la tondeuse."},
                      "en":{"name":"EN?? BARBIER. Taille de la Barbe courte Travaillée","info":"EN?? Contour de la barbe délimité à la tondeuse."}
                    },
                    {
                      "id":6,
                      "weight":70,
                      "fr":{"name":"BARBIER. Taille de la Barbe longue Travaillée","info":"Longueur de la barbe : plus de 5cm."},
                      "en":{"name":"EN?? BARBIER. Taille de la Barbe longue Travaillée","info":"Length : over 5cm."}
                    },
                    {
                      "id":7,
                      "weight":80,
                      "fr":{"name":"COIFFURE. Coloration temporaire","info":""},
                      "en":{"name":"EN?? COIFFURE. Coloration temporaire","info":""}
                    },
                    {
                      "id":8,
                      "weight":90,
                      "fr":{"name":"COIFFURE. Coupe Baby","info":"Bébés de moins de 3 ans."},
                      "en":{"name":"HAIRSTYLE. Baby Cut","info":"Babies under 3 years old."}
                    },
                    {
                      "id":9,
                      "weight":100,
                      "fr":{"name":"COIFFURE. Coupe Enfant","info":"Enfants de moins de 12 ans."},
                      "en":{"name":"HAIRSTYLE. Kid Cut","info":"Kids under 12 years old."}
                    },
                    {
                      "id":10,
                      "weight":110,
                      "fr":{"name":"COIFFURE. Shampoing + Coupe + Coiffage","info":""},
                      "en":{"name":"EN?? COIFFURE. Shampoing + Coupe + Coiffage","info":""}
                    },
                    {
                      "id":11,
                      "weight":120,
                      "fr":{"name":"EPILATION. Aisselles","info":""},
                      "en":{"name":"EN?? EPILATION. Aisselles","info":""}
                    },
                    {
                      "id":12,
                      "weight":130,
                      "fr":{"name":"EPILATION. Avant-bras","info":""},
                      "en":{"name":"EN?? EPILATION. Avant-bras","info":""}
                    },
                    {
                      "id":13,
                      "weight":140,
                      "fr":{"name":"EPILATION. Bras","info":""},
                      "en":{"name":"EN?? EPILATION. Bras","info":""}
                    },
                    {
                      "id":14,
                      "weight":150,
                      "fr":{"name":"EPILATION. Col chemise","info":""},
                      "en":{"name":"EN?? EPILATION. Col chemise","info":""}
                    },
                    {
                      "id":15,
                      "weight":160,
                      "fr":{"name":"EPILATION. Dos + Epaules","info":""},
                      "en":{"name":"EN?? EPILATION. Dos + Epaules","info":""}
                    },
                    {
                      "id":16,
                      "weight":170,
                      "fr":{"name":"EPILATION. Dos","info":""},
                      "en":{"name":"EN?? EPILATION. Dos","info":""}
                    },
                    {
                      "id":17,
                      "weight":180,
                      "fr":{"name":"EPILATION. Epaules","info":""},
                      "en":{"name":"EN?? EPILATION. Epaules","info":""}
                    },
                    {
                      "id":18,
                      "weight":190,
                      "fr":{"name":"EPILATION. Jambes Complètes","info":""},
                      "en":{"name":"EN?? EPILATION. Jambes Complètes","info":""}
                    },
                    {
                      "id":19,
                      "weight":200,
                      "fr":{"name":"EPILATION. Pectoraux","info":""},
                      "en":{"name":"EN?? EPILATION. Pectoraux","info":""}
                    },
                    {
                      "id":20,
                      "weight":210,
                      "fr":{"name":"EPILATION. Torse","info":"L’épilation du torse comprend l’épilation du ventre et des pectoraux."},
                      "en":{"name":"EN?? EPILATION. Torse","info":"EN?? L’épilation du torse comprend l’épilation du ventre et des pectoraux."}
                    },
                    {
                      "id":21,
                      "weight":220,
                      "fr":{"name":"EPILATION. Ventre","info":""},
                      "en":{"name":"EN?? EPILATION. Ventre","info":""}
                    },
                    {
                      "id":22,
                      "weight":230,
                      "fr":{"name":"EPILATION. Visage 1 zone","info":""},
                      "en":{"name":"EN?? EPILATION. Visage 1 zone","info":""}
                    },
                    {
                      "id":23,
                      "weight":240,
                      "fr":{"name":"SOINS > MAINS. Manucure complète","info":""},
                      "en":{"name":"EN?? SOINS > MAINS. Manucure complète","info":""}
                    },
                    {
                      "id":24,
                      "weight":250,
                      "fr":{"name":"SOINS > VISAGE. Soin Hydratant Anti-Fatigue","info":""},
                      "en":{"name":"EN?? SOINS > VISAGE. Soin Hydratant Anti-Fatigue","info":""}
                    },
                    {
                      "id":25,
                      "weight":260,
                      "fr":{"name":"SOINS > VISAGE. Soin Nettoyant Purifiant au Citron Vert","info":""},
                      "en":{"name":"EN?? SOINS > VISAGE. Soin Nettoyant Purifiant au Citron Vert","info":""}
                    },
                    {
                      "id":26,
                      "weight":270,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":27,
                      "weight":280,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":28,
                      "weight":290,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":29,
                      "weight":300,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":30,
                      "weight":310,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    }
                  ]
                },
                {
                  "id":2,
                  "weight":30,
                  "fr":{"name":"Coiffure"},
                  "en":{"name":"Hairstyle"},
                  "color":"#F44336",
                  "services":[
                    {
                      "id":0,
                      "weight":10,
                      "fr":{"name":"Balayage","info":""},
                      "en":{"name":"EN?? Balayage","info":""}
                    },
                    {
                      "id":1,
                      "weight":20,
                      "fr":{"name":"Brushing","info":""},
                      "en":{"name":"EN?? Brushing","info":""}
                    },
                    {
                      "id":2,
                      "weight":30,
                      "fr":{"name":"Chignon","info":""},
                      "en":{"name":"EN?? Chignon","info":""}
                    },
                    {
                      "id":3,
                      "weight":40,
                      "fr":{"name":"Coiffure","info":""},
                      "en":{"name":"EN?? Coiffure","info":""}
                    },
                    {
                      "id":4,
                      "weight":50,
                      "fr":{"name":"Coiffure Cérémonie","info":""},
                      "en":{"name":"EN?? Coiffure Cérémonie","info":""}
                    },
                    {
                      "id":5,
                      "weight":60,
                      "fr":{"name":"Coiffure Mariage","info":""},
                      "en":{"name":"EN?? Coiffure Mariage","info":""}
                    },
                    {
                      "id":6,
                      "weight":70,
                      "fr":{"name":"Couleur","info":""},
                      "en":{"name":"EN?? Couleur","info":""}
                    },
                    {
                      "id":7,
                      "weight":80,
                      "fr":{"name":"Coupe Bébé","info":"Bébés de moins de 3ans."},
                      "en":{"name":"Baby Cut","info":"Babies under 3 years old."}
                    },
                    {
                      "id":8,
                      "weight":90,
                      "fr":{"name":"Coupe Enfant","info":"Enfants de moins de 12 ans."},
                      "en":{"name":"Kid Cut","info":"Kids under 12 years old."}
                    },
                    {
                      "id":9,
                      "weight":100,
                      "fr":{"name":"Défrisage","info":""},
                      "en":{"name":"EN?? Défrisage","info":""}
                    },
                    {
                      "id":10,
                      "weight":110,
                      "fr":{"name":"Extensions Capillaires","info":""},
                      "en":{"name":"EN?? Extensions Capillaires","info":"x"}
                    },
                    {
                      "id":11,
                      "weight":120,
                      "fr":{"name":"Lissage Brésilien","info":""},
                      "en":{"name":"EN?? Lissage Brésilien","info":""}
                    },
                    {
                      "id":12,
                      "weight":130,
                      "fr":{"name":"Lissage Japonnais","info":""},
                      "en":{"name":"EN?? Lissage Japonnais","info":""}
                    },
                    {
                      "id":13,
                      "weight":140,
                      "fr":{"name":"Mèches","info":""},
                      "en":{"name":"EN?? Mèches","info":""}
                    },
                    {
                      "id":14,
                      "weight":150,
                      "fr":{"name":"Permanente","info":""},
                      "en":{"name":"EN?? Permanente","info":""}
                    },
                    {
                      "id":15,
                      "weight":160,
                      "fr":{"name":"Shampoing + Coupe + Coiffage","info":""},
                      "en":{"name":"EN?? Shampoing + Coupe + Coiffage","info":""}
                    },
                    {
                      "id":16,
                      "weight":170,
                      "fr":{"name":"Tresses Africaines","info":""},
                      "en":{"name":"EN?? Tresses Africaines","info":""}
                    },
                    {
                      "id":17,
                      "weight":180,
                      "fr":{"name":"Tie & Dye","info":""},
                      "en":{"name":"EN?? Tie & Dye","info":""}
                    },
                    {
                      "id":18,
                      "weight":190,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":19,
                      "weight":200,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":20,
                      "weight":210,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":21,
                      "weight":220,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":22,
                      "weight":230,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":23,
                      "weight":240,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":24,
                      "weight":250,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":25,
                      "weight":260,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":26,
                      "weight":270,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":27,
                      "weight":280,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":28,
                      "weight":290,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":29,
                      "weight":300,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":30,
                      "weight":310,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    }
                  ]
                },
                {
                  "id":3,
                  "weight":40,
                  "fr":{"name":"Epilation"},
                  "en":{"name":"Waxing"},
                  "color":"#FF9800",
                  "services":[
                    {
                      "id":0,
                      "weight":10,
                      "fr":{"name":"Aisselles","info":""},
                      "en":{"name":"EN?? Aisselles","info":""}
                    },
                    {
                      "id":1,
                      "weight":20,
                      "fr":{"name":"Avant-bras","info":""},
                      "en":{"name":"EN?? Avant-bras","info":""}
                    },
                    {
                      "id":2,
                      "weight":30,
                      "fr":{"name":"Bras","info":""},
                      "en":{"name":"EN?? Bras","info":""}
                    },
                    {
                      "id": 3,
                      "weight": 40,
                      "fr": {"name":"Cuisses","info":""},
                      "en": {"name":"EN?? Cuisses","info":""}
                    },
                    {
                      "id":4,
                      "weight":50,
                      "fr":{"name":"Dos (Bas du)","info":""},
                      "en":{"name":"EN?? Dos (Bas du)","info":""}
                    },
                    {
                      "id":5,
                      "weight":60,
                      "fr":{"name":"Duvet","info":""},
                      "en":{"name":"EN?? Duvet","info":""}
                    },
                    {
                      "id":6,
                      "weight":70,
                      "fr":{"name":"Fesses","info":""},
                      "en":{"name":"EN?? Fesses","info":""}
                    },
                    {
                      "id":7,
                      "weight":80,
                      "fr":{"name":"Jambes 1/2","info":""},
                      "en":{"name":"EN?? Jambes 1/2","info":""}
                    },
                    {
                      "id":8,
                      "weight":90,
                      "fr":{"name":"Jambes 3/4","info":""},
                      "en":{"name":"EN?? Jambes 3/4","info":""}
                    },
                    {
                      "id":9,
                      "weight":100,
                      "fr":{"name":"Jambes Complètes","info":""},
                      "en":{"name":"EN?? Jambes Complètes","info":""}
                    },
                    {
                      "id":10,
                      "weight":110,
                      "fr":{"name":"Lèvres","info":""},
                      "en":{"name":"EN?? Lèvres","info":""}
                    },
                    {
                      "id":11,
                      "weight":120,
                      "fr":{"name":"Maillot Brésilien","info":""},
                      "en":{"name":"EN?? Maillot Brésilien","info":""}
                    },
                    {
                      "id":12,
                      "weight":130,
                      "fr":{"name":"Maillot Classique","info":""},
                      "en":{"name":"EN?? Maillot Classique","info":""}
                    },
                    {
                      "id":13,
                      "weight":140,
                      "fr":{"name":"Maillot Intégral","info":""},
                      "en":{"name":"EN?? Maillot Intégral","info":""}
                    },
                    {
                      "id":14,
                      "weight":150,
                      "fr":{"name":"Sourcils - Création","info":""},
                      "en":{"name":"EN?? Sourcils - Création","info":""}
                    },
                    {
                      "id":15,
                      "weight":160,
                      "fr":{"name":"Sourcils - Entretien","info":""},
                      "en":{"name":"EN?? Sourcils - Entretien","info":""}
                    },
                    {
                      "id":16,
                      "weight":170,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":17,
                      "weight":180,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":18,
                      "weight":190,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":19,
                      "weight":200,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":20,
                      "weight":210,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":21,
                      "weight":220,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":22,
                      "weight":230,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":23,
                      "weight":240,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":24,
                      "weight":250,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":25,
                      "weight":260,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":26,
                      "weight":270,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":27,
                      "weight":280,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":28,
                      "weight":290,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":29,
                      "weight":300,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":30,
                      "weight":310,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    }
                  ]
                },
                {
                  "id":4,
                  "weight":50,
                  "fr":{"name":"Manucure"},
                  "en":{"name":"Manicure"},
                  "color":"#E91E63",
                  "services":[
                    {
                      "id":0,
                      "weight":10,
                      "fr":{"name":"Bain de Paraffine","info":""},
                      "en":{"name":"EN?? Bain de Paraffine","info":""}
                    },
                    {
                      "id":1,
                      "weight":20,
                      "fr":{"name":"Beauté des mains","info":""},
                      "en":{"name":"EN?? Beauté des mains","info":""}
                    },
                    {
                      "id":2,
                      "weight":30,
                      "fr":{"name":"Beauté des mains + Pose de vernis","info":""},
                      "en":{"name":"EN?? Beauté des mains + Pose de vernis","info":""}
                    },
                    {
                      "id":3,
                      "weight":40,
                      "fr":{"name":"Dépose d’ongles en gel ou résine","info":""},
                      "en":{"name":"EN?? Dépose d’ongles en gel ou résine","info":""}
                    },
                    {
                      "id":4,
                      "weight":50,
                      "fr":{"name":"Dépose de Vernis semi-permanent","info":""},
                      "en":{"name":"EN?? Dépose de Vernis semi-permanent","info":""}
                    },
                    {
                      "id":5,
                      "weight":60,
                      "fr":{"name":"Pose d’ongles en gel","info":""},
                      "en":{"name":"EN?? Pose d’ongles en gel","info":""}
                    },
                    {
                      "id":6,
                      "weight":70,
                      "fr":{"name":"Pose d’ongles en gel French","info":""},
                      "en":{"name":"EN?? Pose d’ongles en gel French","info":""}
                    },
                    {
                      "id":7,
                      "weight":80,
                      "fr":{"name":"Pose d’ongles en résine","info":""},
                      "en":{"name":"EN?? Pose d’ongles en résine","info":""}
                    },
                    {
                      "id":8,
                      "weight":90,
                      "fr":{"name":"Pose d’ongles en résine French","info":""},
                      "en":{"name":"EN?? Pose d’ongles en résine French","info":""}
                    },
                    {
                      "id":9,
                      "weight":100,
                      "fr":{"name":"Pose de vernis","info":""},
                      "en":{"name":"EN?? Pose de vernis","info":""}
                    },
                    {
                      "id":10,
                      "weight":110,
                      "fr":{"name":"Pose de vernis French","info":""},
                      "en":{"name":"EN?? Pose de vernis French","info":""}
                    },
                    {
                      "id":11,
                      "weight":120,
                      "fr":{"name":"Pose de vernis semi-permanent","info":""},
                      "en":{"name":"EN?? Pose de vernis semi-permanent","info":""}
                    },
                    {
                      "id":12,
                      "weight":130,
                      "fr":{"name":"Remplissage gel","info":""},
                      "en":{"name":"EN?? Remplissage gel","info":""}
                    },
                    {
                      "id":13,
                      "weight":140,
                      "fr":{"name":"Remplissage gel French","info":""},
                      "en":{"name":"EN?? Remplissage gel French","info":""}
                    },
                    {
                      "id":14,
                      "weight":150,
                      "fr":{"name":"Remplissage résine","info":""},
                      "en":{"name":"EN?? Remplissage résine","info":""}
                    },
                    {
                      "id":15,
                      "weight":160,
                      "fr":{"name":"Remplissage résine French","info":""},
                      "en":{"name":"EN?? Remplissage résine French","info":""}
                    },
                    {
                      "id":16,
                      "weight":170,
                      "fr":{"name":"Réparation d’un ongle","info":""},
                      "en":{"name":"EN?? Réparation d’un ongle","info":""}
                    },
                    {
                      "id":17,
                      "weight":180,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":18,
                      "weight":190,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":19,
                      "weight":200,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":20,
                      "weight":210,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":21,
                      "weight":220,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":22,
                      "weight":230,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":23,
                      "weight":240,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":24,
                      "weight":250,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":25,
                      "weight":260,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":26,
                      "weight":270,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":27,
                      "weight":280,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":28,
                      "weight":290,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":29,
                      "weight":300,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":30,
                      "weight":310,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    }
                  ]
                },
                {
                  "id":5,
                  "weight":60,
                  "fr":{"name":"Pédicure"},
                  "en":{"name":"Pedicure"},
                  "color":"#FFEB3B",
                  "services":[
                    {
                      "id":0,
                      "weight":10,
                      "fr":{"name":"Bain de Paraffine","info":""},
                      "en":{"name":"EN?? Bain de Paraffine","info":""}
                    },
                    {
                      "id":1,
                      "weight":20,
                      "fr":{"name":"Beauté des pieds","info":""},
                      "en":{"name":"EN?? Beauté des pieds","info":""}
                    },
                    {
                      "id":2,
                      "weight":30,
                      "fr":{"name":"Beauté des pieds + Pose de vernis","info":""},
                      "en":{"name":"EN?? Beauté des pieds + Pose de vernis","info":""}
                    },
                    {
                      "id":3,
                      "weight":40,
                      "fr":{"name":"Dépose d’ongles en gel ou résine","info":""},
                      "en":{"name":"EN?? Dépose d’ongles en gel ou résine","info":""}
                    },
                    {
                      "id":4,
                      "weight":50,
                      "fr":{"name":"Dépose de Vernis semi-permanent","info":""},
                      "en":{"name":"EN?? Dépose de Vernis semi-permanent","info":""}
                    },
                    {
                      "id":5,
                      "weight":60,
                      "fr":{"name":"Fish Pédicure","info":""},
                      "en":{"name":"EN?? Fish Pédicure","info":""}
                    },
                    {
                      "id":6,
                      "weight":70,
                      "fr":{"name":"Pose d’ongles en gel","info":""},
                      "en":{"name":"EN?? Pose d’ongles en gel","info":""}
                    },
                    {
                      "id":7,
                      "weight":80,
                      "fr":{"name":"Pose d’ongles en gel French","info":""},
                      "en":{"name":"EN?? Pose d’ongles en gel French","info":""}
                    },
                    {
                      "id":8,
                      "weight":90,
                      "fr":{"name":"Pose d’ongles en résine","info":""},
                      "en":{"name":"EN?? Pose d’ongles en résine","info":""}
                    },
                    {
                      "id":9,
                      "weight":100,
                      "fr":{"name":"Pose d’ongles en résine French","info":""},
                      "en":{"name":"EN?? Pose d’ongles en résine French","info":""}
                    },
                    {
                      "id":10,
                      "weight":110,
                      "fr":{"name":"Pose de vernis","info":""},
                      "en":{"name":"EN?? Pose de vernis","info":""}
                    },
                    {
                      "id":11,
                      "weight":120,
                      "fr":{"name":"Pose de vernis French","info":""},
                      "en":{"name":"EN?? Pose de vernis French","info":""}
                    },
                    {
                      "id":12,
                      "weight":130,
                      "fr":{"name":"Pose de vernis semi-permanent","info":""},
                      "en":{"name":"EN?? Pose de vernis semi-permanent","info":""}
                    },
                    {
                      "id":13,
                      "weight":140,
                      "fr":{"name":"Remplissage gel","info":""},
                      "en":{"name":"EN?? Remplissage gel","info":""}
                    },
                    {
                      "id":14,
                      "weight":150,
                      "fr":{"name":"Remplissage gel French","info":""},
                      "en":{"name":"EN?? Remplissage gel French","info":""}
                    },
                    {
                      "id":15,
                      "weight":160,
                      "fr":{"name":"Remplissage résine","info":""},
                      "en":{"name":"EN?? Remplissage résine","info":""}
                    },
                    {
                      "id":16,
                      "weight":170,
                      "fr":{"name":"Remplissage résine French","info":""},
                      "en":{"name":"EN?? Remplissage résine French","info":""}
                    },
                    {
                      "id":17,
                      "weight":180,
                      "fr":{"name":"Réparation d’un ongle","info":""},
                      "en":{"name":"EN?? Réparation d’un ongle","info":""}
                    },
                    {
                      "id":18,
                      "weight":190,
                      "fr":{"name":"Spa Balnéo","info":""},
                      "en":{"name":"EN?? Spa Balnéo","info":""}
                    },
                    {
                      "id":19,
                      "weight":200,
                      "fr":{"name":"Spa Energisant","info":""},
                      "en":{"name":"EN?? Spa Energisant","info":""}
                    },
                    {
                      "id":20,
                      "weight":210,
                      "fr":{"name":"Spa Relaxant","info":""},
                      "en":{"name":"EN?? Spa Relaxant","info":""}
                    },
                    {
                      "id":21,
                      "weight":220,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":22,
                      "weight":230,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":23,
                      "weight":240,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":24,
                      "weight":250,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":25,
                      "weight":260,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":26,
                      "weight":270,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":27,
                      "weight":280,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":28,
                      "weight":290,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":29,
                      "weight":300,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":30,
                      "weight":310,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    }
                  ]
                },
                {
                  "id":6,
                  "weight":70,
                  "fr":{"name":"Maquillage"},
                  "en":{"name":"Makeup"},
                  "color":"#9C27B0",
                  "services":[
                    {
                      "id":0,
                      "weight":10,
                      "fr":{"name":"Extensions de cils","info":""},
                      "en":{"name":"EN?? Extensions de cils","info":""}
                    },
                    {
                      "id":1,
                      "weight":20,
                      "fr":{"name":"Leçon de maquillage (individuelle)","info":""},
                      "en":{"name":"EN?? Leçon de maquillage (individuelle)","info":""}
                    },
                    {
                      "id":2,
                      "weight":30,
                      "fr":{"name":"Leçon de maquillage (à plusieurs)","info":""},
                      "en":{"name":"EN?? Leçon de maquillage (à plusieurs)","info":""}
                    },
                    {
                      "id":3,
                      "weight":40,
                      "fr":{"name":"Maquillage Cérémonie","info":" 1 Essai + 1 Maquillage "},
                      "en":{"name":"EN?? Maquillage Cérémonie","info":""}
                    },
                    {
                      "id":4,
                      "weight":50,
                      "fr":{"name":"Maquillage Jour","info":""},
                      "en":{"name":"EN?? Maquillage Jour","info":""}
                    },
                    {
                      "id":5,
                      "weight":60,
                      "fr":{"name":"Maquillage Naturel","info":""},
                      "en":{"name":"EN?? Maquillage Naturel","info":""}
                    },
                    {
                      "id":6,
                      "weight":70,
                      "fr":{"name":"Maquillage Oriental","info":""},
                      "en":{"name":"EN?? Maquillage Oriental","info":""}
                    },
                    {
                      "id":7,
                      "weight":80,
                      "fr":{"name":"Maquillage Soir","info":""},
                      "en":{"name":"EN?? Maquillage Soir","info":""}
                    },
                    {
                      "id":8,
                      "weight":90,
                      "fr":{"name":"Maquillage Sophistiqué","info":""},
                      "en":{"name":"EN?? Maquillage Sophistiqué","info":""}
                    },
                    {
                      "id":9,
                      "weight":100,
                      "fr":{"name":"Mise en beauté du Regard","info":"Epilation + Maquillage des sourcils et des yeux"},
                      "en":{"name":"EN?? Mise en beauté du Regard","info":"EN?? Epilation + Maquillage des sourcils et des yeux"}
                    },
                    {
                      "id":10,
                      "weight":110,
                      "fr":{"name":"Permanente des cils","info":""},
                      "en":{"name":"EN?? Permanente des cils","info":""}
                    },
                    {
                      "id":11,
                      "weight":120,
                      "fr":{"name":"Permanente des cils + teinture des sourcils","info":""},
                      "en":{"name":"EN?? Permanente des cils","info":""}
                    },
                    {
                      "id":12,
                      "weight":130,
                      "fr":{"name":"Teinture des cils ou sourcils","info":""},
                      "en":{"name":"EN?? Teinture des cils ou sourcils","info":""}
                    },
                    {
                      "id":13,
                      "weight":140,
                      "fr":{"name":"Teinture des cils & sourcils","info":""},
                      "en":{"name":"EN?? Teinture des cils & sourcils","info":""}
                    },
                    {
                      "id":14,
                      "weight":150,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":15,
                      "weight":160,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":16,
                      "weight":170,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":17,
                      "weight":180,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":18,
                      "weight":190,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":19,
                      "weight":200,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":20,
                      "weight":210,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":21,
                      "weight":220,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":22,
                      "weight":230,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":23,
                      "weight":240,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":24,
                      "weight":250,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":25,
                      "weight":260,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":26,
                      "weight":270,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":27,
                      "weight":280,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":28,
                      "weight":290,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":29,
                      "weight":300,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":30,
                      "weight":310,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    }
                  ]
                },
                {
                  "id":7,
                  "weight":80,
                  "fr":{"name":"Massage"},
                  "en":{"name":"Massage"},
                  "color":"#CDDC39",
                  "services":[
                    {
                      "id":0,
                      "weight":10,
                      "fr":{"name":"Massage Anti-Stress","info":""},
                      "en":{"name":"EN?? Massage Anti-Stress","info":""}
                    },
                    {
                      "id":1,
                      "weight":20,
                      "fr":{"name":"Massage Ayurvédique","info":""},
                      "en":{"name":"EN?? Massage Ayurvédique","info":""}
                    },
                    {
                      "id":2,
                      "weight":30,
                      "fr":{"name":"Massage Balinais","info":""},
                      "en":{"name":"EN?? Massage Balinais","info":""}
                    },
                    {
                      "id":3,
                      "weight":40,
                      "fr":{"name":"Massage aux Bambous","info":""},
                      "en":{"name":"EN?? Massage aux Bambous","info":""}
                    },
                    {
                      "id":4,
                      "weight":50,
                      "fr":{"name":"Massage à la Bougie","info":""},
                      "en":{"name":"EN?? Massage à la Bougie","info":""}
                    },
                    {
                      "id":5,
                      "weight":60,
                      "fr":{"name":"Massage Californien","info":""},
                      "en":{"name":"EN?? Massage Californien","info":""}
                    },
                    {
                      "id":6,
                      "weight":70,
                      "fr":{"name":"Massage au Chocolat","info":""},
                      "en":{"name":"EN?? Massage au Chocolat","info":""}
                    },
                    {
                      "id":7,
                      "weight":80,
                      "fr":{"name":"Massage Crânien","info":""},
                      "en":{"name":"EN?? Massage Crânien","info":""}
                    },
                    {
                      "id":8,
                      "weight":90,
                      "fr":{"name":"Massage Drainant","info":""},
                      "en":{"name":"EN?? Massage Drainant","info":""}
                    },
                    {
                      "id":9,
                      "weight":100,
                      "fr":{"name":"Massage Détente Bébé","info":""},
                      "en":{"name":"EN?? Massage Détente Bébé","info":""}
                    },
                    {
                      "id":10,
                      "weight":110,
                      "fr":{"name":"Massage aux Pierres Chaudes","info":""},
                      "en":{"name":"EN?? Massage aux Pierres Chaudes","info":""}
                    },
                    {
                      "id":11,
                      "weight":120,
                      "fr":{"name":"Massage Polynésien","info":""},
                      "en":{"name":"EN?? Massage Polynésien","info":""}
                    },
                    {
                      "id":12,
                      "weight":130,
                      "fr":{"name":"Massage Relaxant du dos","info":""},
                      "en":{"name":"EN?? Massage Relaxant du dos","info":""}
                    },
                    {
                      "id":13,
                      "weight":140,
                      "fr":{"name":"Massage Suédois","info":""},
                      "en":{"name":"EN?? Massage Suédois","info":""}
                    },
                    {
                      "id":14,
                      "weight":150,
                      "fr":{"name":"Massage Thaïlandais","info":""},
                      "en":{"name":"EN?? Massage Thaïlandais","info":""}
                    },
                    {
                      "id":15,
                      "weight":160,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":16,
                      "weight":170,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":17,
                      "weight":180,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":18,
                      "weight":190,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":19,
                      "weight":200,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":20,
                      "weight":210,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":21,
                      "weight":220,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":22,
                      "weight":230,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":23,
                      "weight":240,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":24,
                      "weight":250,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":25,
                      "weight":260,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":26,
                      "weight":270,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":27,
                      "weight":280,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":28,
                      "weight":290,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":29,
                      "weight":300,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":30,
                      "weight":310,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    }
                  ]
                },
                {
                  "id":8,
                  "weight":90,
                  "fr":{"name":"Forme"},
                  "en":{"name":""},
                  "color":"#3F51B5",
                  "services":[
                    {
                      "id":0,
                      "weight":10,
                      "fr":{"name":"Aquabike","info":""},
                      "en":{"name":"EN?? Aquabike","info":""}
                    },
                    {
                      "id":1,
                      "weight":20,
                      "fr":{"name":"Cardio Training","info":""},
                      "en":{"name":"EN?? Cardio Training","info":""}
                    },
                    {
                      "id":2,
                      "weight":30,
                      "fr":{"name":"Fitness","info":""},
                      "en":{"name":"EN?? Fitness","info":""}
                    },
                    {
                      "id":3,
                      "weight":40,
                      "fr":{"name":"Hip-Hop","info":""},
                      "en":{"name":"EN?? Hip-Hop","info":""}
                    },
                    {
                      "id":4,
                      "weight":50,
                      "fr":{"name":"Pilates","info":""},
                      "en":{"name":"EN?? Pilates","info":""}
                    },
                    {
                      "id":5,
                      "weight":60,
                      "fr":{"name":"Power Plate","info":""},
                      "en":{"name":"EN?? Power Plate","info":""}
                    },
                    {
                      "id":6,
                      "weight":70,
                      "fr":{"name":"Salsa","info":""},
                      "en":{"name":"EN?? Salsa","info":""}
                    },
                    {
                      "id":7,
                      "weight":80,
                      "fr":{"name":"Stretching","info":""},
                      "en":{"name":"EN?? Stretching","info":""}
                    },
                    {
                      "id":8,
                      "weight":90,
                      "fr":{"name":"Taï chi","info":""},
                      "en":{"name":"EN?? Taï chi","info":""}
                    },
                    {
                      "id":9,
                      "weight":100,
                      "fr":{"name":"Yoga","info":""},
                      "en":{"name":"EN?? Yoga","info":""}
                    },
                    {
                      "id":10,
                      "weight":110,
                      "fr":{"name":"Zumba","info":""},
                      "en":{"name":"EN?? Zumba","info":""}
                    },
                    {
                      "id":11,
                      "weight":120,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":12,
                      "weight":130,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":13,
                      "weight":140,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":14,
                      "weight":150,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":15,
                      "weight":160,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":16,
                      "weight":170,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":17,
                      "weight":180,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":18,
                      "weight":190,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":19,
                      "weight":200,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":20,
                      "weight":210,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":21,
                      "weight":220,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":22,
                      "weight":230,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":23,
                      "weight":240,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":24,
                      "weight":250,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":25,
                      "weight":260,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":26,
                      "weight":270,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":27,
                      "weight":280,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":28,
                      "weight":290,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":29,
                      "weight":300,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":30,
                      "weight":310,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    }
                  ]
                },
                {
                  "id":9,
                  "weight":100,
                  "fr":{"name":"Soins"},
                  "en":{"name":""},
                  "color":"#00BCD4",
                  "services":[
                    {
                      "id":0,
                      "weight":10,
                      "fr":{"name":"CORPS. Enveloppement","info":""},
                      "en":{"name":"EN?? CORPS. Enveloppement","info":""}
                    },
                    {
                      "id":1,
                      "weight":20,
                      "fr":{"name":"CORPS. Gommage","info":""},
                      "en":{"name":"EN?? CORPS. Gommage","info":""}
                    },
                    {
                      "id":2,
                      "weight":30,
                      "fr":{"name":"CORPS. Enveloppement + Gommage","info":""},
                      "en":{"name":"EN?? CORPS. Enveloppement + Gommage","info":""}
                    },
                    {
                      "id":3,
                      "weight":40,
                      "fr":{"name":"VISAGE. Gommage","info":""},
                      "en":{"name":"EN?? VISAGE. Gommage","info":""}
                    },
                    {
                      "id":4,
                      "weight":50,
                      "fr":{"name":"VISAGE. Masque","info":""},
                      "en":{"name":"EN?? VISAGE. Masque","info":""}
                    },
                    {
                      "id":5,
                      "weight":60,
                      "fr":{"name":"VISAGE. Peeling","info":""},
                      "en":{"name":"EN?? VISAGE. Peeling","info":""}
                    },
                    {
                      "id":6,
                      "weight":70,
                      "fr":{"name":"VISAGE. Soin Anti-Âge","info":""},
                      "en":{"name":"EN?? VISAGE. Soin Anti-Âge","info":""}
                    },
                    {
                      "id":7,
                      "weight":80,
                      "fr":{"name":"VISAGE. Soin Hydratant","info":""},
                      "en":{"name":"EN?? VISAGE. Soin Hydratant","info":""}
                    },
                    {
                      "id":8,
                      "weight":90,
                      "fr":{"name":"VISAGE. Soin Bio","info":""},
                      "en":{"name":"EN?? VISAGE. Soin Bio","info":""}
                    },
                    {
                      "id":9,
                      "weight":100,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":10,
                      "weight":110,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":11,
                      "weight":120,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":12,
                      "weight":130,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":13,
                      "weight":140,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":14,
                      "weight":150,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":15,
                      "weight":160,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":16,
                      "weight":170,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":17,
                      "weight":180,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":18,
                      "weight":190,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":19,
                      "weight":200,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":20,
                      "weight":210,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":21,
                      "weight":220,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":22,
                      "weight":230,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":23,
                      "weight":240,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":24,
                      "weight":250,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":25,
                      "weight":260,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":26,
                      "weight":270,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":27,
                      "weight":280,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":28,
                      "weight":290,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":29,
                      "weight":300,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":30,
                      "weight":310,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    }
                  ]
                },
                {
                  "id":10,
                  "weight":110,
                  "fr":{"name":"Minceur"},
                  "en":{"name":""},
                  "color":"#2196F3",
                  "services":[
                    {
                      "id":0,
                      "weight":10,
                      "fr":{"name":"Amincissement par ultrasons","info":""},
                      "en":{"name":"EN?? Amincissement par ultrasons","info":""}
                    },
                    {
                      "id":1,
                      "weight":20,
                      "fr":{"name":"Cellu M6","info":""},
                      "en":{"name":"EN?? Cellu M6","info":""}
                    },
                    {
                      "id":2,
                      "weight":30,
                      "fr":{"name":"LPG Cellu M6","info":""},
                      "en":{"name":"EN?? LPG Cellu M6","info":""}
                    },
                    {
                      "id":3,
                      "weight":40,
                      "fr":{"name":"LPG Lipomodelage","info":""},
                      "en":{"name":"EN?? LPG Lipomodelage","info":""}
                    },
                    {
                      "id":4,
                      "weight":50,
                      "fr":{"name":"LPG Wellbox","info":""},
                      "en":{"name":"EN?? LPG Wellbox","info":""}
                    },
                    {
                      "id":5,
                      "weight":60,
                      "fr":{"name":"Palper rouler","info":""},
                      "en":{"name":"EN?? Palper rouler","info":""}
                    },
                    {
                      "id":6,
                      "weight":70,
                      "fr":{"name":"Pressothérapie","info":""},
                      "en":{"name":"EN?? Pressothérapie","info":""}
                    },
                    {
                      "id":7,
                      "weight":80,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":8,
                      "weight":90,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":9,
                      "weight":100,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":10,
                      "weight":110,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":11,
                      "weight":120,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":12,
                      "weight":130,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":13,
                      "weight":140,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":14,
                      "weight":150,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":15,
                      "weight":160,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":16,
                      "weight":170,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":17,
                      "weight":180,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":18,
                      "weight":190,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":19,
                      "weight":200,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":20,
                      "weight":210,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":21,
                      "weight":220,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":22,
                      "weight":230,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":23,
                      "weight":240,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":24,
                      "weight":250,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":25,
                      "weight":260,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":26,
                      "weight":270,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":27,
                      "weight":280,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":28,
                      "weight":290,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":29,
                      "weight":300,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    },
                    {
                      "id":30,
                      "weight":310,
                      "fr":{"name":"","info":""},
                      "en":{"name":"","info":""}
                    }
                  ]
                }
              ]
            },
            {
              "id":2,
              "weight":30,
              "fr":{"name":"Santé"},
              "en":{"name":"Health"}
            }
          ] ;



      var categoriesOLD = [
        {
          id:0,
          weight:10,
          fr:{name:'Bien-être'},
          en:{name:'Wellness'}

        },
        {
          id:1,
          weight:20,
          fr:{name:'Beauté'},
          en:{name:'Beauty'},
          subCategories:[
            {
              id:0,
              weight:10,
              fr:{name:'Coiffure'},
              en:{name:'Hairstyle'},
              color:'#F44336'
            },
            {
              id:1,
              weight:20,
              fr:{name:'Epilation'},
              en:{name:'Waxing'},
              color:'#E91E63',
              services:[
                {
                  id:0,
                  weight:10,
                  fr:{name:'1/2 jambes',info:'blblagla'},
                  en:{name:'1/2 legs',info:'blblagla'}
                },
                {
                  id:1,
                  weight:20,
                  fr:{name:'Jambes complètes',info:''},
                  en:{name:'Full legs',info:''}
                },
                {
                  id:2,
                  weight:30,
                  fr:{name:'Aisselles',info:''},
                  en:{name:'Armpit',info:''}
                },
                {
                  id: 3,
                  weight: 40,
                  fr: {name: 'Maillot brésilien', info: 'blalblzlzkhfgjzshfg fzzrfzf'},
                  en: {name: 'Brazilian bikini', info: 'sfsjfhjs shjfghjsgfjhhsf'}
                },
                {
                  id:4,
                  weight:50,
                  fr:{name:'Maillot classique',info:''},
                  en:{name:'Classic bikini',info:''}
                }
              ]
            },
            {
              id:2,
              weight:30,
              fr:{name:'Massage'},
              en:{name:'Massage'},
              color:'#9C27B0'
            },
            {
              id:3,
              weight:40,
              fr:{name:'Manucure'},
              en:{name:'Manicure'},
              color:'#2196F3'
            },
            {
              id:4,
              weight:50,
              fr:{name:'Pédicure'},
              en:{name:'Chirodist'},
              color:'#009688'
            },
            {
              id:5,
              weight:60,
              fr:{name:'Maquillage'},
              en:{name:'Makeup'},
              color:'#CDDC39'
            }
          ]
        },
        {
          id:2,
          weight:30,
          fr:{name:'Santé'},
          en:{name:'Health'}
        }

      ];

      $log.info("old:"+categoriesOLD);
      $log.info("new:"+categories);

      return {
        all: function() {
          return categories;
          //return _.sortBy(categories, function(category){return category.weight});
        },
        get: function(categoryId) {
          for (var i = 0; i < categories.length; i++) {
            if (categories[i].id === parseInt(categoryId)) {
              return categories[i];
            }
          }
          return null;
        }
      }
    })



.factory('Chats', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var chats = [{
    id: 0,
    name: 'Ben Sparrow',
    lastText: 'You on your way?',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    lastText: 'Hey, it\'s me',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlin',
    lastText: 'Did you get the ice cream?',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    lastText: 'I should buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    lastText: 'Look at my mukluks!',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];

  return {
    all: function() {
      return chats;
    },
    remove: function(chat) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(chatId) {
      for (var i = 0; i < chats.length; i++) {
        if (chats[i].id === parseInt(chatId)) {
          return chats[i];
        }
      }
      return null;
    }
  }
})

/**
 * A simple example service that returns some data.
 */
.factory('Friends', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  // Some fake testing data
  var friends = [{
    id: 0,
    name: 'Ben Sparrow',
    notes: 'Enjoys drawing things',
    face: 'https://pbs.twimg.com/profile_images/514549811765211136/9SgAuHeY.png'
  }, {
    id: 1,
    name: 'Max Lynx',
    notes: 'Odd obsession with everything',
    face: 'https://avatars3.githubusercontent.com/u/11214?v=3&s=460'
  }, {
    id: 2,
    name: 'Andrew Jostlen',
    notes: 'Wears a sweet leather Jacket. I\'m a bit jealous',
    face: 'https://pbs.twimg.com/profile_images/491274378181488640/Tti0fFVJ.jpeg'
  }, {
    id: 3,
    name: 'Adam Bradleyson',
    notes: 'I think he needs to buy a boat',
    face: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa.jpeg'
  }, {
    id: 4,
    name: 'Perry Governor',
    notes: 'Just the nicest guy',
    face: 'https://pbs.twimg.com/profile_images/491995398135767040/ie2Z_V6e.jpeg'
  }];


  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});

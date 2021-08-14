import { Component, Input, OnInit } from '@angular/core';
import { Form, FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Types {
  value: string;
  viewValue: string;
}

interface Members {
  value: number;
  viewValue: number;
}

interface Heroes {
  value: string;
  viewValue: string;
  thumbnail: string;
}

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.component.html',
  styleUrls: ['./team-form.component.css']
})

export class TeamFormComponent implements OnInit {
  isLinear = true;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  checkLimit() {
    let total = this.secondFormGroup.get("alternateHeroes") as FormArray;
    return !(total.length < 3);
  }


  types: Types[] = [
    { value: 'RTA', viewValue: 'RTA' },
    { value: 'Guildwar Offense', viewValue: 'Guildwar Offense' },
    { value: 'Guildwar Defense', viewValue: 'Guildwar Defense' },
    { value: 'Arena Offense', viewValue: 'Arena Offense' },
    { value: 'Arena Defense', viewValue: 'Arena Defense' },
    { value: 'Oneshot', viewValue: 'Oneshot' },
    { value: 'Abyss', viewValue: 'Abyss' },
    { value: 'Other', viewValue: 'Other' }
  ]

  members: Members[] = [
    { value: 1, viewValue: 1 },
    { value: 2, viewValue: 2 },
    { value: 3, viewValue: 3 },
    { value: 4, viewValue: 4 },
  ]

  // Thanks to epicsevendb for the data
  heroes: Heroes[] = [
    {
     "value": "Alencia",
     "viewValue": "Alencia",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1100_l.png"
    },
    {
     "value": "Ambitious Tywin",
     "viewValue": "Ambitious Tywin",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2042_l.png"
    },
    {
     "value": "Apocalypse Ravi",
     "viewValue": "Apocalypse Ravi",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2019_l.png"
    },
    {
     "value": "Aramintha",
     "viewValue": "Aramintha",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1048_l.png"
    },
    {
     "value": "Arbiter Vildred",
     "viewValue": "Arbiter Vildred",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2007_l.png"
    },
    {
     "value": "Archdemon's Shadow",
     "viewValue": "Archdemon's Shadow",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c5004_l.png"
    },
    {
     "value": "Baal & Sezan",
     "viewValue": "Baal & Sezan",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1015_l.png"
    },
    {
     "value": "Baiken",
     "viewValue": "Baiken",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1093_l.png"
    },
    {
     "value": "Basar",
     "viewValue": "Basar",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1053_l.png"
    },
    {
     "value": "Bellona",
     "viewValue": "Bellona",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1071_l.png"
    },
    {
     "value": "Blood Moon Haste",
     "viewValue": "Blood Moon Haste",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2039_l.png"
    },
    {
     "value": "Bomb Model Kanna",
     "viewValue": "Bomb Model Kanna",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1097_l.png"
    },
    {
     "value": "Briar Witch Iseria",
     "viewValue": "Briar Witch Iseria",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2024_l.png"
    },
    {
     "value": "Cecilia",
     "viewValue": "Cecilia",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1002_l.png"
    },
    {
     "value": "Celine",
     "viewValue": "Celine",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1103_l.png"
    },
    {
     "value": "Cerise",
     "viewValue": "Cerise",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1081_l.png"
    },
    {
     "value": "Cermia",
     "viewValue": "Cermia",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1079_l.png"
    },
    {
     "value": "Charles",
     "viewValue": "Charles",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1027_l.png"
    },
    {
     "value": "Charlotte",
     "viewValue": "Charlotte",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1009_l.png"
    },
    {
     "value": "Chloe",
     "viewValue": "Chloe",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1049_l.png"
    },
    {
     "value": "Choux",
     "viewValue": "Choux",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1101_l.png"
    },
    {
     "value": "Dark Corvus",
     "viewValue": "Dark Corvus",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2012_l.png"
    },
    {
     "value": "Desert Jewel Basar",
     "viewValue": "Desert Jewel Basar",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2053_l.png"
    },
    {
     "value": "Designer Lilibet",
     "viewValue": "Designer Lilibet",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2095_l.png"
    },
    {
     "value": "Destina",
     "viewValue": "Destina",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2022_l.png"
    },
    {
     "value": "Diene",
     "viewValue": "Diene",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1076_l.png"
    },
    {
     "value": "Dizzy",
     "viewValue": "Dizzy",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1094_l.png"
    },
    {
     "value": "Eda",
     "viewValue": "Eda",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1111_l.png"
    },
    {
     "value": "Elena",
     "viewValue": "Elena",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1091_l.png"
    },
    {
     "value": "Elphelt",
     "viewValue": "Elphelt",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1105_l.png"
    },
    {
     "value": "Ervalen",
     "viewValue": "Ervalen",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1108_l.png"
    },
    {
     "value": "Fairytale Tenebria",
     "viewValue": "Fairytale Tenebria",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c5050_l.png"
    },
    {
     "value": "Faithless Lidica",
     "viewValue": "Faithless Lidica",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2046_l.png"
    },
    {
     "value": "Fallen Cecilia",
     "viewValue": "Fallen Cecilia",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2002_l.png"
    },
    {
     "value": "Flan",
     "viewValue": "Flan",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1110_l.png"
    },
    {
     "value": "Haste",
     "viewValue": "Haste",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1039_l.png"
    },
    {
     "value": "Holiday Yufine",
     "viewValue": "Holiday Yufine",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c5016_l.png"
    },
    {
     "value": "Iseria",
     "viewValue": "Iseria",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1024_l.png"
    },
    {
     "value": "Judge Kise",
     "viewValue": "Judge Kise",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2006_l.png"
    },
    {
     "value": "Kawerik",
     "viewValue": "Kawerik",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1073_l.png"
    },
    {
     "value": "Kayron",
     "viewValue": "Kayron",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1023_l.png"
    },
    {
     "value": "Ken",
     "viewValue": "Ken",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1047_l.png"
    },
    {
     "value": "Kise",
     "viewValue": "Kise",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1006_l.png"
    },
    {
     "value": "Krau",
     "viewValue": "Krau",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1070_l.png"
    },
    {
     "value": "Landy",
     "viewValue": "Landy",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1109_l.png"
    },
    {
     "value": "Last Rider Krau",
     "viewValue": "Last Rider Krau",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2070_l.png"
    },
    {
     "value": "Lidica",
     "viewValue": "Lidica",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1046_l.png"
    },
    {
     "value": "Lilias",
     "viewValue": "Lilias",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1089_l.png"
    },
    {
     "value": "Lilibet",
     "viewValue": "Lilibet",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1095_l.png"
    },
    {
     "value": "Little Queen Charlotte",
     "viewValue": "Little Queen Charlotte",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2009_l.png"
    },
    {
     "value": "Ludwig",
     "viewValue": "Ludwig",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1069_l.png"
    },
    {
     "value": "Luluca",
     "viewValue": "Luluca",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1082_l.png"
    },
    {
     "value": "Luna",
     "viewValue": "Luna",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1066_l.png"
    },
    {
     "value": "Maid Chloe",
     "viewValue": "Maid Chloe",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2049_l.png"
    },
    {
     "value": "Martial Artist Ken",
     "viewValue": "Martial Artist Ken",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2047_l.png"
    },
    {
     "value": "Mediator Kawerik",
     "viewValue": "Mediator Kawerik",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2073_l.png"
    },
    {
     "value": "Melissa",
     "viewValue": "Melissa",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1096_l.png"
    },
    {
     "value": "Mort",
     "viewValue": "Mort",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1104_l.png"
    },
    {
     "value": "Mui",
     "viewValue": "Mui",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1044_l.png"
    },
    {
     "value": "Operator Sigret",
     "viewValue": "Operator Sigret",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2072_l.png"
    },
    {
     "value": "Pavel",
     "viewValue": "Pavel",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1080_l.png"
    },
    {
     "value": "Politis",
     "viewValue": "Politis",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1112_l.png"
    },
    {
     "value": "Ravi",
     "viewValue": "Ravi",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1019_l.png"
    },
    {
     "value": "Ray",
     "viewValue": "Ray",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1090_l.png"
    },
    {
     "value": "Remnant Violet",
     "viewValue": "Remnant Violet",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2074_l.png"
    },
    {
     "value": "Roana",
     "viewValue": "Roana",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1102_l.png"
    },
    {
     "value": "Ruele of Light",
     "viewValue": "Ruele of Light",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1022_l.png"
    },
    {
     "value": "Sage Baal & Sezan",
     "viewValue": "Sage Baal & Sezan",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2015_l.png"
    },
    {
     "value": "Seaside Bellona",
     "viewValue": "Seaside Bellona",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c5071_l.png"
    },
    {
     "value": "Senya",
     "viewValue": "Senya",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1106_l.png"
    },
    {
     "value": "Sez",
     "viewValue": "Sez",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1038_l.png"
    },
    {
     "value": "Sigret",
     "viewValue": "Sigret",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1072_l.png"
    },
    {
     "value": "Silver Blade Aramintha",
     "viewValue": "Silver Blade Aramintha",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2048_l.png"
    },
    {
     "value": "Sol",
     "viewValue": "Sol",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1092_l.png"
    },
    {
     "value": "Solitaria of the Snow",
     "viewValue": "Solitaria of the Snow",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2111_l.png"
    },
    {
     "value": "Specimen Sez",
     "viewValue": "Specimen Sez",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2038_l.png"
    },
    {
     "value": "Specter Tenebria",
     "viewValue": "Specter Tenebria",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2050_l.png"
    },
    {
     "value": "Tamarinne",
     "viewValue": "Tamarinne",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1067_l.png"
    },
    {
     "value": "Tenebria",
     "viewValue": "Tenebria",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1050_l.png"
    },
    {
     "value": "Top Model Luluca",
     "viewValue": "Top Model Luluca",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2082_l.png"
    },
    {
     "value": "Tywin",
     "viewValue": "Tywin",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1042_l.png"
    },
    {
     "value": "Vildred",
     "viewValue": "Vildred",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1007_l.png"
    },
    {
     "value": "Violet",
     "viewValue": "Violet",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1074_l.png"
    },
    {
     "value": "Vivian",
     "viewValue": "Vivian",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1088_l.png"
    },
    {
     "value": "Yufine",
     "viewValue": "Yufine",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1016_l.png"
    },
    {
     "value": "Yuna",
     "viewValue": "Yuna",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1030_l.png"
    },
    {
     "value": "Zeno",
     "viewValue": "Zeno",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1083_l.png"
    },
    {
     "value": "Achates",
     "viewValue": "Achates",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1017_l.png"
    },
    {
     "value": "Angelica",
     "viewValue": "Angelica",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1062_l.png"
    },
    {
     "value": "Armin",
     "viewValue": "Armin",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1008_l.png"
    },
    {
     "value": "Assassin Cartuja",
     "viewValue": "Assassin Cartuja",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2013_l.png"
    },
    {
     "value": "Assassin Cidd",
     "viewValue": "Assassin Cidd",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2014_l.png"
    },
    {
     "value": "Assassin Coli",
     "viewValue": "Assassin Coli",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2033_l.png"
    },
    {
     "value": "Auxiliary Lots",
     "viewValue": "Auxiliary Lots",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2031_l.png"
    },
    {
     "value": "Benevolent Romann",
     "viewValue": "Benevolent Romann",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2043_l.png"
    },
    {
     "value": "Blaze Dingo",
     "viewValue": "Blaze Dingo",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2021_l.png"
    },
    {
     "value": "Blood Blade Karin",
     "viewValue": "Blood Blade Karin",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2011_l.png"
    },
    {
     "value": "Cartuja",
     "viewValue": "Cartuja",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1013_l.png"
    },
    {
     "value": "Celestial Mercedes",
     "viewValue": "Celestial Mercedes",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2005_l.png"
    },
    {
     "value": "Challenger Dominiel",
     "viewValue": "Challenger Dominiel",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2037_l.png"
    },
    {
     "value": "Champion Zerato",
     "viewValue": "Champion Zerato",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2010_l.png"
    },
    {
     "value": "Cidd",
     "viewValue": "Cidd",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1014_l.png"
    },
    {
     "value": "Clarissa",
     "viewValue": "Clarissa",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1028_l.png"
    },
    {
     "value": "Coli",
     "viewValue": "Coli",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1033_l.png"
    },
    {
     "value": "Corvus",
     "viewValue": "Corvus",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1012_l.png"
    },
    {
     "value": "Crescent Moon Rin",
     "viewValue": "Crescent Moon Rin",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2054_l.png"
    },
    {
     "value": "Crimson Armin",
     "viewValue": "Crimson Armin",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2008_l.png"
    },
    {
     "value": "Crozet",
     "viewValue": "Crozet",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1036_l.png"
    },
    {
     "value": "Dingo",
     "viewValue": "Dingo",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1021_l.png"
    },
    {
     "value": "Dominiel",
     "viewValue": "Dominiel",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1037_l.png"
    },
    {
     "value": "Fighter Maya",
     "viewValue": "Fighter Maya",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2032_l.png"
    },
    {
     "value": "Free Spirit Tieria",
     "viewValue": "Free Spirit Tieria",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3026_l.png"
    },
    {
     "value": "Furious",
     "viewValue": "Furious",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1087_l.png"
    },
    {
     "value": "General Purrgis",
     "viewValue": "General Purrgis",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2035_l.png"
    },
    {
     "value": "Great Chief Khawana",
     "viewValue": "Great Chief Khawana",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2086_l.png"
    },
    {
     "value": "Guider Aither",
     "viewValue": "Guider Aither",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2018_l.png"
    },
    {
     "value": "Karin",
     "viewValue": "Karin",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1011_l.png"
    },
    {
     "value": "Khawana",
     "viewValue": "Khawana",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1086_l.png"
    },
    {
     "value": "Khawazu",
     "viewValue": "Khawazu",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1085_l.png"
    },
    {
     "value": "Kitty Clarissa",
     "viewValue": "Kitty Clarissa",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2028_l.png"
    },
    {
     "value": "Kizuna AI",
     "viewValue": "Kizuna AI",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1107_l.png"
    },
    {
     "value": "Leo",
     "viewValue": "Leo",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1029_l.png"
    },
    {
     "value": "Lots",
     "viewValue": "Lots",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1031_l.png"
    },
    {
     "value": "Maya",
     "viewValue": "Maya",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1032_l.png"
    },
    {
     "value": "Mercedes",
     "viewValue": "Mercedes",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1005_l.png"
    },
    {
     "value": "Purrgis",
     "viewValue": "Purrgis",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1035_l.png"
    },
    {
     "value": "Rin",
     "viewValue": "Rin",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1054_l.png"
    },
    {
     "value": "Roaming Warrior Leo",
     "viewValue": "Roaming Warrior Leo",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2029_l.png"
    },
    {
     "value": "Romann",
     "viewValue": "Romann",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1043_l.png"
    },
    {
     "value": "Rose",
     "viewValue": "Rose",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1003_l.png"
    },
    {
     "value": "Schuri",
     "viewValue": "Schuri",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1020_l.png"
    },
    {
     "value": "Serila",
     "viewValue": "Serila",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1040_l.png"
    },
    {
     "value": "Shadow Rose",
     "viewValue": "Shadow Rose",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2003_l.png"
    },
    {
     "value": "Shooting Star Achates",
     "viewValue": "Shooting Star Achates",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2017_l.png"
    },
    {
     "value": "Silk",
     "viewValue": "Silk",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1004_l.png"
    },
    {
     "value": "Sinful Angelica",
     "viewValue": "Sinful Angelica",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2062_l.png"
    },
    {
     "value": "Surin",
     "viewValue": "Surin",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1065_l.png"
    },
    {
     "value": "Tempest Surin",
     "viewValue": "Tempest Surin",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2065_l.png"
    },
    {
     "value": "Troublemaker Crozet",
     "viewValue": "Troublemaker Crozet",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2036_l.png"
    },
    {
     "value": "Wanderer Silk",
     "viewValue": "Wanderer Silk",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2004_l.png"
    },
    {
     "value": "Watcher Schuri",
     "viewValue": "Watcher Schuri",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c2020_l.png"
    },
    {
     "value": "Zerato",
     "viewValue": "Zerato",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1010_l.png"
    },
    {
     "value": "Adlay",
     "viewValue": "Adlay",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3043_l.png"
    },
    {
     "value": "Adventurer Ras",
     "viewValue": "Adventurer Ras",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c5001_l.png"
    },
    {
     "value": "Ainos",
     "viewValue": "Ainos",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3105_l.png"
    },
    {
     "value": "Ains",
     "viewValue": "Ains",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3093_l.png"
    },
    {
     "value": "Aither",
     "viewValue": "Aither",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1018_l.png"
    },
    {
     "value": "Alexa",
     "viewValue": "Alexa",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3012_l.png"
    },
    {
     "value": "All-Rounder Wanda",
     "viewValue": "All-Rounder Wanda",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4065_l.png"
    },
    {
     "value": "Angelic Montmorancy",
     "viewValue": "Angelic Montmorancy",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4042_l.png"
    },
    {
     "value": "Arowell",
     "viewValue": "Arowell",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3004_l.png"
    },
    {
     "value": "Azalea",
     "viewValue": "Azalea",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3031_l.png"
    },
    {
     "value": "Bask",
     "viewValue": "Bask",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3006_l.png"
    },
    {
     "value": "Batisse",
     "viewValue": "Batisse",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3095_l.png"
    },
    {
     "value": "Butcher Corps Inquisitor",
     "viewValue": "Butcher Corps Inquisitor",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3001_l.png"
    },
    {
     "value": "Captain Rikoris",
     "viewValue": "Captain Rikoris",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4034_l.png"
    },
    {
     "value": "Carmainerose",
     "viewValue": "Carmainerose",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3071_l.png"
    },
    {
     "value": "Carrot",
     "viewValue": "Carrot",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3051_l.png"
    },
    {
     "value": "Celeste",
     "viewValue": "Celeste",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3064_l.png"
    },
    {
     "value": "Chaos Inquisitor",
     "viewValue": "Chaos Inquisitor",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4001_l.png"
    },
    {
     "value": "Chaos Sect Axe",
     "viewValue": "Chaos Sect Axe",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4025_l.png"
    },
    {
     "value": "Church of Ilryos Axe",
     "viewValue": "Church of Ilryos Axe",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3025_l.png"
    },
    {
     "value": "Commander Lorina",
     "viewValue": "Commander Lorina",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4035_l.png"
    },
    {
     "value": "Doll Maker Pearlhorizon",
     "viewValue": "Doll Maker Pearlhorizon",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4073_l.png"
    },
    {
     "value": "Doris",
     "viewValue": "Doris",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3044_l.png"
    },
    {
     "value": "Eaton",
     "viewValue": "Eaton",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3094_l.png"
    },
    {
     "value": "Elson",
     "viewValue": "Elson",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3054_l.png"
    },
    {
     "value": "Enott",
     "viewValue": "Enott",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3022_l.png"
    },
    {
     "value": "Falconer Kluri",
     "viewValue": "Falconer Kluri",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4003_l.png"
    },
    {
     "value": "Glenn",
     "viewValue": "Glenn",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3103_l.png"
    },
    {
     "value": "Gloomyrain",
     "viewValue": "Gloomyrain",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3074_l.png"
    },
    {
     "value": "Godmother",
     "viewValue": "Godmother",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3101_l.png"
    },
    {
     "value": "Gunther",
     "viewValue": "Gunther",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3024_l.png"
    },
    {
     "value": "Hataan",
     "viewValue": "Hataan",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3091_l.png"
    },
    {
     "value": "Hazel",
     "viewValue": "Hazel",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3041_l.png"
    },
    {
     "value": "Helga",
     "viewValue": "Helga",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3023_l.png"
    },
    {
     "value": "Hurado",
     "viewValue": "Hurado",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3055_l.png"
    },
    {
     "value": "Ian",
     "viewValue": "Ian",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3102_l.png"
    },
    {
     "value": "Jecht",
     "viewValue": "Jecht",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3053_l.png"
    },
    {
     "value": "Jena",
     "viewValue": "Jena",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3052_l.png"
    },
    {
     "value": "Judith",
     "viewValue": "Judith",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3011_l.png"
    },
    {
     "value": "Kikirat v2",
     "viewValue": "Kikirat v2",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3084_l.png"
    },
    {
     "value": "Kiris",
     "viewValue": "Kiris",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3063_l.png"
    },
    {
     "value": "Kluri",
     "viewValue": "Kluri",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3003_l.png"
    },
    {
     "value": "Lena",
     "viewValue": "Lena",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3092_l.png"
    },
    {
     "value": "Lorina",
     "viewValue": "Lorina",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3035_l.png"
    },
    {
     "value": "Lucy",
     "viewValue": "Lucy",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3113_l.png"
    },
    {
     "value": "Magic Scholar Doris",
     "viewValue": "Magic Scholar Doris",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4044_l.png"
    },
    {
     "value": "Mascot Hazel",
     "viewValue": "Mascot Hazel",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4041_l.png"
    },
    {
     "value": "Mercenary Helga",
     "viewValue": "Mercenary Helga",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4023_l.png"
    },
    {
     "value": "Mirsa",
     "viewValue": "Mirsa",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3014_l.png"
    },
    {
     "value": "Mistychain",
     "viewValue": "Mistychain",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3072_l.png"
    },
    {
     "value": "Montmorancy",
     "viewValue": "Montmorancy",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3042_l.png"
    },
    {
     "value": "Mucacha",
     "viewValue": "Mucacha",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3033_l.png"
    },
    {
     "value": "Muse Rima",
     "viewValue": "Muse Rima",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4062_l.png"
    },
    {
     "value": "Nemunas",
     "viewValue": "Nemunas",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3061_l.png"
    },
    {
     "value": "Otillie",
     "viewValue": "Otillie",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3045_l.png"
    },
    {
     "value": "Pearlhorizon",
     "viewValue": "Pearlhorizon",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3073_l.png"
    },
    {
     "value": "Pyllis",
     "viewValue": "Pyllis",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3005_l.png"
    },
    {
     "value": "Ras",
     "viewValue": "Ras",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c1001_l.png"
    },
    {
     "value": "Requiemroar",
     "viewValue": "Requiemroar",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3075_l.png"
    },
    {
     "value": "Researcher Carrot",
     "viewValue": "Researcher Carrot",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4051_l.png"
    },
    {
     "value": "Righteous Thief Roozid",
     "viewValue": "Righteous Thief Roozid",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4013_l.png"
    },
    {
     "value": "Rikoris",
     "viewValue": "Rikoris",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3034_l.png"
    },
    {
     "value": "Rima",
     "viewValue": "Rima",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3062_l.png"
    },
    {
     "value": "Roozid",
     "viewValue": "Roozid",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3013_l.png"
    },
    {
     "value": "Sonia",
     "viewValue": "Sonia",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3104_l.png"
    },
    {
     "value": "Sven",
     "viewValue": "Sven",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3015_l.png"
    },
    {
     "value": "Taranor Guard",
     "viewValue": "Taranor Guard",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3032_l.png"
    },
    {
     "value": "Taranor Royal Guard",
     "viewValue": "Taranor Royal Guard",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3002_l.png"
    },
    {
     "value": "Tieria",
     "viewValue": "Tieria",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3021_l.png"
    },
    {
     "value": "Wanda",
     "viewValue": "Wanda",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c3065_l.png"
    },
    {
     "value": "Zealot Carmainerose",
     "viewValue": "Zealot Carmainerose",
     "thumbnail": "https://assets.epicsevendb.com/_source/face/c4071_l.png"
    }
   ]

  get alternateHeroes() {
    return this.secondFormGroup.get("alternateHeroes") as FormArray;
  }

  firstFormGroupData(control: string) {
    return this.firstFormGroup.get(control)?.value;
  }

  secondFormGroupData(control: string) {
    return this.secondFormGroup.get(control)?.value;
  }

   get secondFormGroupLength() {
    let data = this.secondFormGroup.get("alternateHeroes") as FormArray;
    return new Array(data.length);
  }

  alternateHeroData(index: number, type: string) {
    let data = this.secondFormGroup.get("alternateHeroes") as FormArray;
    return data.controls[index].get(type)?.value;
  }

  heroPortrait(hero: string) {
    let parsedHero = this.heroes.find(data => data.value === hero);
    return parsedHero?.thumbnail;
  }

  addAlternateHero() {
    this.alternateHeroes.push(this._formBuilder.group({
      name: [''],
      combat: [''],
      attack: [''],
      defense: [''],
      health: [''],
      speed: [''],
      critRate: [''],
      critDmg: [''],
      eff: [''],
      res: [''],
      dac: [''],
    }))
  }


  constructor(private _formBuilder: FormBuilder) {
    this.firstFormGroup = this._formBuilder.group({
      teamName: ['', Validators.required],
      teamType: ['', Validators.required],
      teamDesc: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      name: [''],
      combat: [''],
      attack: [''],
      defense: [''],
      health: [''],
      speed: [''],
      critRate: [''],
      critDmg: [''],
      eff: [''],
      res: [''],
      dac: [''],
      alternateHeroes: this._formBuilder.array([])
    });
  }

  ngOnInit() { }
}

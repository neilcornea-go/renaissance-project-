import { ref } from 'vue';

const nationalityOptions = ref([
  { id: '1', option: 'Afghan' },
  { id: '2', option: 'Albanian' },
  { id: '3', option: 'Algerian' },
  { id: '4', option: 'American' },
  { id: '5', option: 'Andorran' },
  { id: '6', option: 'Angolan' },
  { id: '7', option: 'Antiguans' },
  { id: '8', option: 'Argentinean' },
  { id: '9', option: 'Armenian' },
  { id: '10', option: 'Australian' },
  { id: '11', option: 'Austrian' },
  { id: '12', option: 'Azerbaijani' },
  { id: '13', option: 'Bahamian' },
  { id: '14', option: 'Bahraini' },
  { id: '15', option: 'Bangladeshi' },
  { id: '16', option: 'Barbadian' },
  { id: '17', option: 'Barbudans' },
  { id: '18', option: 'Batswana' },
  { id: '19', option: 'Belarusian' },
  { id: '20', option: 'Belgian' },
  { id: '21', option: 'Belizean' },
  { id: '22', option: 'Beninese' },
  { id: '23', option: 'Bhutanese' },
  { id: '24', option: 'Bolivian' },
  { id: '25', option: 'Bosnian' },
  { id: '26', option: 'Brazilian' },
  { id: '27', option: 'British' },
  { id: '28', option: 'Bruneian' },
  { id: '29', option: 'Bulgarian' },
  { id: '30', option: 'Burkinabe' },
  { id: '31', option: 'Burmese' },
  { id: '32', option: 'Burundian' },
  { id: '33', option: 'Cambodian' },
  { id: '34', option: 'Cameroonian' },
  { id: '35', option: 'Canadian' },
  { id: '36', option: 'Cape Verdean' },
  { id: '37', option: 'Central African' },
  { id: '38', option: 'Chadian' },
  { id: '39', option: 'Chilean' },
  { id: '40', option: 'Chinese' },
  { id: '41', option: 'Colombian' },
  { id: '42', option: 'Comoran' },
  { id: '43', option: 'Congolese' },
  { id: '44', option: 'Costa Rican' },
  { id: '45', option: 'Croatian' },
  { id: '46', option: 'Cuban' },
  { id: '47', option: 'Cypriot' },
  { id: '48', option: 'Czech' },
  { id: '49', option: 'Danish' },
  { id: '50', option: 'Djibouti' },
  { id: '51', option: 'Dominican' },
  { id: '52', option: 'Dutch' },
  { id: '53', option: 'East Timorese' },
  { id: '54', option: 'Ecuadorean' },
  { id: '55', option: 'Egyptian' },
  { id: '56', option: 'Emirian' },
  { id: '57', option: 'Equatorial Guinean' },
  { id: '58', option: 'Eritrean' },
  { id: '59', option: 'Estonian' },
  { id: '60', option: 'Ethiopian' },
  { id: '61', option: 'Fijian' },
  { id: '62', option: 'Filipino' },
  { id: '63', option: 'Finnish' },
  { id: '64', option: 'French' },
  { id: '65', option: 'Gabonese' },
  { id: '66', option: 'Gambian' },
  { id: '67', option: 'Georgian' },
  { id: '68', option: 'German' },
  { id: '69', option: 'Ghanaian' },
  { id: '70', option: 'Greek' },
  { id: '71', option: 'Grenadian' },
  { id: '72', option: 'Guatemalan' },
  { id: '73', option: 'Guinea-Bissauan' },
  { id: '74', option: 'Guinean' },
  { id: '75', option: 'Guyanese' },
  { id: '76', option: 'Haitian' },
  { id: '77', option: 'Herzegovinian' },
  { id: '78', option: 'Honduran' },
  { id: '79', option: 'Hungarian' },
  { id: '80', option: 'I-Kiribati' },
  { id: '81', option: 'Icelander' },
  { id: '82', option: 'Indian' },
  { id: '83', option: 'Indonesian' },
  { id: '84', option: 'Iranian' },
  { id: '85', option: 'Iraqi' },
  { id: '86', option: 'Irish' },
  { id: '87', option: 'Israeli' },
  { id: '88', option: 'Italian' },
  { id: '89', option: 'Ivorian' },
  { id: '90', option: 'Jamaican' },
  { id: '91', option: 'Japanese' },
  { id: '92', option: 'Jordanian' },
  { id: '93', option: 'Kazakhstani' },
  { id: '94', option: 'Kenyan' },
  { id: '95', option: 'Kittian and Nevisian' },
  { id: '96', option: 'Kuwaiti' },
  { id: '97', option: 'Kyrgyz' },
  { id: '98', option: 'Laotian' },
  { id: '99', option: 'Latvian' },
  { id: '100', option: 'Lebanese' },
  { id: '101', option: 'Liberian' },
  { id: '102', option: 'Libyan' },
  { id: '103', option: 'Liechtensteiner' },
  { id: '104', option: 'Lithuanian' },
  { id: '105', option: 'Luxembourger' },
  { id: '106', option: 'Macedonian' },
  { id: '107', option: 'Malagasy' },
  { id: '108', option: 'Malawian' },
  { id: '109', option: 'Malaysian' },
  { id: '110', option: 'Maldivan' },
  { id: '111', option: 'Malian' },
  { id: '112', option: 'Maltese' },
  { id: '113', option: 'Marshallese' },
  { id: '114', option: 'Mauritanian' },
  { id: '115', option: 'Mauritian' },
  { id: '116', option: 'Mexican' },
  { id: '117', option: 'Micronesian' },
  { id: '118', option: 'Moldovan' },
  { id: '119', option: 'Monacan' },
  { id: '120', option: 'Mongolian' },
  { id: '121', option: 'Moroccan' },
  { id: '122', option: 'Mosotho' },
  { id: '123', option: 'Motswana' },
  { id: '124', option: 'Mozambican' },
  { id: '125', option: 'Namibian' },
  { id: '126', option: 'Nauruan' },
  { id: '127', option: 'Nepalese' },
  { id: '128', option: 'New Zealander' },
  { id: '129', option: 'Nicaraguan' },
  { id: '130', option: 'Nigerian' },
  { id: '131', option: 'Nigerien' },
  { id: '132', option: 'North Korean' },
  { id: '133', option: 'Northern Irish' },
  { id: '134', option: 'Norwegian' },
  { id: '135', option: 'Omani' },
  { id: '136', option: 'Pakistani' },
  { id: '137', option: 'Palauan' },
  { id: '138', option: 'Panamanian' },
  { id: '139', option: 'Papua New Guinean' },
  { id: '140', option: 'Paraguayan' },
  { id: '141', option: 'Peruvian' },
  { id: '142', option: 'Polish' },
  { id: '143', option: 'Portuguese' },
  { id: '144', option: 'Qatari' },
  { id: '145', option: 'Romanian' },
  { id: '146', option: 'Russian' },
  { id: '147', option: 'Rwandan' },
  { id: '148', option: 'Saint Lucian' },
  { id: '149', option: 'Salvadoran' },
  { id: '150', option: 'Samoan' },
  { id: '151', option: 'San Marinese' },
  { id: '152', option: 'Sao Tomean' },
  { id: '153', option: 'Saudi' },
  { id: '154', option: 'Scottish' },
  { id: '155', option: 'Senegalese' },
  { id: '156', option: 'Serbian' },
  { id: '157', option: 'Seychellois' },
  { id: '158', option: 'Sierra Leonean' },
  { id: '159', option: 'Singaporean' },
  { id: '160', option: 'Slovakian' },
  { id: '161', option: 'Slovenian' },
  { id: '162', option: 'Solomon Islander' },
  { id: '163', option: 'Somali' },
  { id: '164', option: 'South African' },
  { id: '165', option: 'South Korean' },
  { id: '166', option: 'Spanish' },
  { id: '167', option: 'Sri Lankan' },
  { id: '168', option: 'Sudanese' },
  { id: '169', option: 'Surinamer' },
  { id: '170', option: 'Swazi' },
  { id: '171', option: 'Swedish' },
  { id: '172', option: 'Swiss' },
  { id: '173', option: 'Syrian' },
  { id: '174', option: 'Taiwanese' },
  { id: '175', option: 'Tajik' },
  { id: '176', option: 'Tanzanian' },
  { id: '177', option: 'Thai' },
  { id: '178', option: 'Togolese' },
  { id: '179', option: 'Tongan' },
  { id: '180', option: 'Trinidadian or Tobagonian' },
  { id: '181', option: 'Tunisian' },
  { id: '182', option: 'Turkish' },
  { id: '183', option: 'Tuvaluan' },
  { id: '184', option: 'Ugandan' },
  { id: '185', option: 'Ukrainian' },
  { id: '186', option: 'Uruguayan' },
  { id: '187', option: 'Uzbekistani' },
  { id: '188', option: 'Venezuelan' },
  { id: '189', option: 'Vietnamese' },
  { id: '190', option: 'Welsh' },
  { id: '191', option: 'Yemenite' },
  { id: '192', option: 'Zambian' },
  { id: '193', option: 'Zimbabwean' }
]);

export function useNationalityData() {
  return {
    nationalityOptions
  };
}
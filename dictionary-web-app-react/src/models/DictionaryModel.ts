export interface DictionaryModel {
  word: string;
  phonetic: string;
  phonetics: [
    {
      text: string;
      audio: string;
    },
    {
      text: string;
    }
  ];
  origin: string;
  meanings: [
    {
      partOfSpeech: string;
      definitions: [
        {
          definition: string;
          synonyms: string[];
          antonyms: string[];
        }
      ];
      synonyms: string[];
      antonyms: string[];
    }
  ];
}

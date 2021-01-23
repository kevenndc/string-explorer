export default {
  state: {
    selectedMethod: '',
    find: [
      {
        name: 'chatAt',
        optionLabel: 'um caractere em um determinado índice',
        description: 'Retorna um único caractere em um determinado índice da String',
        example: `const sentence = 'Code is poetry';<br>
        const index = 2;<br>
        console.log('O caractere no índice ' + index + ' é ' + sentence.charAt(index));`,
        output: 'O caractere no índice 2 é d'
      },
      {
        name: 'charCodeAt',
        optionLabel: 'um código de caractere em um determinado índice',
        description: 'Retorna um código identificador UTF-16 que representa o caractere em um determinado índice da String',
        example: `const sentence = 'Code is poetry';<br>
        const index = 2;<br>
        const code = sentence.charCodeAt(index);<br>
        console.log('O código de caractere  ' + code + ' é igual a ' + sentence.charAt(index));`,
        output: 'O código de caractere 100 é igual a d'
      },
    ],
    modify: [
      {
        name: 'replace',
        optionLabel: 'substituindo a primeira ocorrência de um padrão/termo com outro termo',
        description: 'Retorna uma nova String com a primeira ocorrência do padrão/termo substituída por outro termo' ,
        example: `const sentence = 'Code is poetry';<br>
        const newSentence = sentence.replace('poetry', 'art');<br>
        console.log(newSentence);`,
        output: 'Code is art'
      },
    ]
  }
}
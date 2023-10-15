module.exports = {
    ...require('gts/.prettierrc.json'),
    importOrder: [
      // first party frameworks
      // react, next, next/*
      '^((react)|(next))(\/.+)?$',

      // third party framework complements
      // react-* next-* or *-react *-next
      '^(.+\/)?(((react)|(next))-.+)|(.+-((react)|(next)))$',

      // Other third party imports
      // i18next, ...
      '<THIRD_PARTY_MODULES>',

      // Absolute custom modules imports
      // @/theme, @/lib
      '^@\/components\/.+$',
      '^@\/lib\/.+$',
      '^@.+$',

      // Relative custom modules imports
      // ./theme, ../lib
      '^(.+)\/.+$',
    ],
    importOrderSeparation: true,
    importOrderSortSpecifiers: true,
  }

const categories = [
  {
    name: 'category1',
    subcategories: [
      {
        name: 'category2',
        subcategories: []
      },
      {
        name: 'category3',
        subcategories: [
          {
            name: 'category4',
            subcategories: []
          }
        ]
      }
    ]
  },
  {
    name: 'category5',
    subcategories: []
  }
]

function getCategoryPath(categories, categoryName) {
  let path

  const categoryFound = categories.find(category => category.name === categoryName)

  if (categoryFound) {
    return `/${categoryFound.name}`
  } else {
    const categoriesWithSubcategories = categories.filter(category => category.subcategories.length)

    categoriesWithSubcategories.forEach(category => {
      const subPath = getCategoryPath(category.subcategories, categoryName)

      if (subPath) {
        path = `/${category.name}${subPath}`
      }
    })
  }

  return path
}

console.log(getCategoryPath(categories, 'category5'))
console.log(getCategoryPath(categories, 'category1'))
console.log(getCategoryPath(categories, 'category2'))
console.log(getCategoryPath(categories, 'category3'))
console.log(getCategoryPath(categories, 'category4'))

const categories = require('./categories.json')

const extraCategories = require('./extraCategories.json')

function getCategoryPath(categories, categoryName) {
  let path

  const categoryFound = categories.find(category => category.name === categoryName)

  if (categoryFound) {
    return `/${categoryFound.name}`
  } else {
    const categoriesWithSubcategories = categories.filter(category => category.subcategories.length)

    // Assuming that there are no categories repeated within other categories
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

console.log('--------------')

console.log(getCategoryPath(extraCategories, 'category1'))
console.log(getCategoryPath(extraCategories, 'category1.1'))
console.log(getCategoryPath(extraCategories, 'category1.1.1'))
console.log(getCategoryPath(extraCategories, 'category1.1.2'))

console.log('--------------')

console.log(getCategoryPath(extraCategories, 'category2'))
console.log(getCategoryPath(extraCategories, 'category2.1'))
console.log(getCategoryPath(extraCategories, 'category2.2'))
console.log(getCategoryPath(extraCategories, 'category2.2.1'))

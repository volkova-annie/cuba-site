const path = require('path')
const slug = require('slug')
const slash = require('slash')
const moment = require('moment')
const pagesRequest = require('./pages-request')
const combineNodes = require('./helpers/combineNodes')

const indexPage = path.resolve(process.cwd(), 'src/templates/index.js')
const eventsPage = path.resolve(process.cwd(), 'src/templates/events/index.js')
const eventsPost = path.resolve(process.cwd(), 'src/templates/events/single.js')
const menuPage = path.resolve(process.cwd(), 'src/templates/menu/index.js')
const menuPost = path.resolve(process.cwd(), 'src/templates/menu/single.js')
// const galleryPage = path.resolve(process.cwd(), 'src/templates/gallery/index.js')
// const galleryPost = path.resolve(process.cwd(), 'src/templates/gallery/single.js')

function createPost(withDate, node) {
  const date = node.en.date
    ? moment(node.en.date).format('YY-MM-DD')
    : null

  return Object.assign({}, node, {
    formatedDate: date,
    slug: slug(`${withDate && date ? `${date}-` : ''}${node.en.title}`).toLowerCase()
  })
}

exports.createPages = async ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators
  const result = await graphql(pagesRequest)

  if (result.errors) {
    throw new Error(result.errors)
  }

  function createPages(opts) {
    const {rootPath, pageTemplate, postTemplate, items} = opts

    createPage({
      path: rootPath,
      component: slash(pageTemplate),
      context: {
        data: {items},
      },
    })
    items.forEach(node => {
      createPage({
        path: `${rootPath}/${node.slug}`,
        component: slash(postTemplate),
        context: {data: node}
      })
    })
  }

  let { events, menu, gallery, slider } = result.data

  events = combineNodes(events.edges).map(createPost.bind(null, true))
  menu = combineNodes(menu.edges).map(createPost.bind(null, false))
  // gallery = combineNodes(gallery.edges).map(createPost)
  slider = combineNodes(slider.edges)

  function filterIndexItem(item) {
    return (item.ru.image && item.ru.image.file) && (item.en.image && item.en.image.file)
  }

  const indexData = {
    events: events.filter(filterIndexItem).slice(0, 8),
    menu: menu.filter(filterIndexItem).slice(0, 8),
    slider: slider,
  }

  createPage({
    path: '/',
    component: slash(indexPage),
    context: {data: indexData}
  })

  createPages({
    rootPath: '/events',
    pageTemplate: eventsPage,
    postTemplate: eventsPost,
    items: events,
  })
  createPages({
    rootPath: '/menu',
    pageTemplate: menuPage,
    postTemplate: menuPost,
    items: menu,
  })
  // createPages({
  //   rootPath: '/gallery',
  //   pageTemplate: galleryPage,
  //   postTemplate: galleryPost,
  //   items: gallery,
  // })
}

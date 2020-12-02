import $ from 'jquery';

const Parse = {
  server: 'http://52.26.193.201:3000/reviews/4',

  getAllList: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server + '/list?count=100&sort=relevant',
      type: 'GET',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error: errorCB || function() {
        console.error('Failed to fetch list of reviews sorted by relevance from Greenfield')
      }
    });
  },
  getAllListHelpfulness: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server + '/list?count=100&sort=helpfulness',
      type: 'GET',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error: errorCB || function() {
        console.error('Failed to fetch list of reviews sorted by helpfulness from Greenfield')
      }
    });
  },
  getAllListNewest: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server + '/list?count=100&sort=newest',
      type: 'GET',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error: errorCB || function() {
        console.error('Failed to fetch list of reviews sorted by newest from Greenfield')
      }
    });
  },
  getProductMeta: function(successCB, errorCB = null) {
    $.ajax({
      url: Parse.server + '/meta',
      type: 'GET',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error: errorCB || function() {
        console.error('Failed to fetch meta of reviews from Greenfield')
      }
    });
  } ,
  markAsHelpful: function(id, successCB, errorCB = null) {
    $.ajax({
      url: `http://52.26.193.201:3000/reviews/helpful/${id}`,
      type: 'PUT',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error: errorCB || function() {
        console.error('Failed to mark review as helpful on Greenfield')
      }
    })
  },
  submitReview: function(obj, successCB, errorCB = null) {
    $.ajax({
      url: Parse.server,
      type: 'Post',
      contentType: 'application/json',
      data: obj,
      success: successCB,
      error: errorCB || function() {
        console.error('Error when submiting review on Greenfield')
      }
    });
  },
  getAllProductList: function(successCB, errorCB = null) {
    $.ajax({
      url: 'http://52.26.193.201:3000/products/list?count=20',
      type: 'GET',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error: errorCB || function() {
        console.error('Failed to fetch list of products from Greenfield')
      }
    });
  },
  reportReview: function(id, successCB, errorCB = null) {
    $.ajax({
      url: `http://52.26.193.201:3000/reviews/report/${id}`,
      type: 'PUT',
      contentType: 'application/json',
      data: {},
      success: successCB,
      error: errorCB || function() {
        console.error('Failed to report review on Greenfield')
      }
    })
  },
}

export default Parse
const $ = jQuery // assuming this app is on a Drupal page with jQuery

/**
 * Get all data from API.
 */
export function getData() {
  return function (dispatch, getState) {
    dispatch(getDataPending())
    $.ajax({
        url: '/jsonapi/node/gear',
        type: 'GET',
        timeout: 20000,
        success: function(response) {
          dispatch(getDataSuccess(response.data));
        }
       })
      // .done(function(response) {
      //   dispatch(getDataSuccess(response))
      // })
      // .error(function(jqXHR, textStatus, errorThrown) {
      //   dispatch(getDataFail(textStatus))
      // })
  }
}

function getDataPending() {
  return {
    type: 'GET_DATA_PENDING'
  }
}

function getDataSuccess(data) {
  return {
    type: 'GET_DATA_SUCCESS',
    data
  }
}

function getDataFail(error) {
  return {
    type: 'GET_DATA_FAIL',
    error
  }
}

export function searchTitle(search) {
  return {
    type: 'SEARCH_TITLE',
    search
  }
}

export function addGearToTrip(index) {
  return {
    type: 'SELECT_GEAR',
    index
  }
}

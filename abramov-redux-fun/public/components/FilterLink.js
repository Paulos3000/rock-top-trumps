import React from 'react'
import { connect } from 'react-redux'

// import specific action
import { setVisibilityFilter } from '../actions/actionCreators'

// LINK (PRESENTATIONAL COMPONENT)
const Link = ( {active, children, onClick} ) => {
   if (active) {
      return <span>{children}</span>
   }
   return (
      <a href='#'
         onClick={e => {
            e.preventDefault();
            onClick();
         }}
      >
         {children}
      </a>
   )
}
// GENERATE CONTAINER WITH connect()...
const mapStateToLinkProps = (state, ownProps) => ({
   active: ownProps.filter === state.visibilityFilter
})
const mapDispatchToLinkProps = (dispatch, ownProps) => ({
   onClick() {
      dispatch(setVisibilityFilter(ownProps.filter))
   }
})
// CONNECT CONTAINER TO PRESENTATIONAL (ie. pass props to presentational)
export const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link)

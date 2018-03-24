import { connect } from 'react-redux'

import { requestLogout } from 'app/auth/actions'

import Header from 'app/Header'

const mapDispatchToProps = dispatch => ({
  logout : () => dispatch(requestLogout())
})

export default connect(null, mapDispatchToProps)(Header)

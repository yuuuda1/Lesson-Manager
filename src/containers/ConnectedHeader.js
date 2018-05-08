import { connect } from 'react-redux'

import { requestLogout } from 'app/auth/actions'

// import Header from 'app/Header'
import HeaderTool from 'app/HeaderTool'

const mapDispatchToProps = dispatch => ({
  logout : () => dispatch(requestLogout())
})

export default connect(null, mapDispatchToProps)(HeaderTool)

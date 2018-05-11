import { connect } from 'react-redux'

import { requestLogout } from 'app/foundation/auth/actions'

// import Header from 'app/foundation/components/Header'
import HeaderTool from 'app/foundation/components/HeaderTool'

const mapDispatchToProps = dispatch => ({
  logout : () => dispatch(requestLogout())
})

export default connect(null, mapDispatchToProps)(HeaderTool)

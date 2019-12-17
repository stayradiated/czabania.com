import styled from '@emotion/styled'
import { PropTypes } from 'prop-types'

const MetaGroup = styled('small')`
  margin: 0 0 0.5em;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  display: block;
  background: rgba(0, 0, 0, 0.03);
  text-align: right;
  padding-right: 20px;
  font-size: 10px;
  line-height: 15px;
  color: #6F6F6F;
`

const Meta = (props) => {
  const { date } = props

  return (
    <MetaGroup>{date}</MetaGroup>
  )
}

Meta.propTypes = {
  date: PropTypes.string.isRequired,
}

export default Meta

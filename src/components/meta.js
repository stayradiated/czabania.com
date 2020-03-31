import styled from '@emotion/styled'
import { PropTypes } from 'prop-types'

const MetaGroup = styled('small')`
  display: flex;
  justify-content: space-between;

  margin: 0 0 0.5em;
  border-top: 1px solid rgba(0, 0, 0, 0.06);
  background: rgba(0, 0, 0, 0.03);
  padding: 0 20px;
  font-size: 10px;
  line-height: 15px;
  color: #6f6f6f;
`

const Tag = styled('div')`
  flex: 1;
  text-align: left;

  &:before {
    content: '#';
  }
`

const Date = styled('div')`
  flex: 1;
  text-align: right;
`

const Meta = (props) => {
  const { tag, date } = props

  return (
    <MetaGroup>
      {tag && <Tag>{tag}</Tag>}
      <Date>{date}</Date>
    </MetaGroup>
  )
}

Meta.propTypes = {
  tag: PropTypes.string,
  date: PropTypes.string.isRequired,
}

export default Meta

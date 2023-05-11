// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActive} = props
  const {tabId, displayText} = tabDetails

  const changeActiveTabId = () => {
    updateActiveTabId(tabId)
  }

  const activeTabClassName = isActive ? 'active-tab' : ''

  return (
    <li className={`tab-item-container ${activeTabClassName}`}>
      <button className="tab-btn" type="button" onClick={changeActiveTabId}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

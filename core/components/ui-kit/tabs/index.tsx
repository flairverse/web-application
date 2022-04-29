import { Tabs as AntTabs } from 'antd'
import { FC } from 'react'
import * as Lib from './lib'

const { TabPane } = AntTabs

export const Tabs: FC<Lib.T.TabsProps> = ({ onChange, tabs, defaultActive = '1', ...rest }) => (
  <Lib.S.TabsContainer {...rest}>
    <AntTabs defaultActiveKey={defaultActive} onChange={onChange}>
      {tabs.map(({ content, key, title }) => (
        <TabPane tab={title} key={key}>
          {content}
        </TabPane>
      ))}
    </AntTabs>
  </Lib.S.TabsContainer>
)

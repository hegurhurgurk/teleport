/*
Copyright 2019 Gravitational, Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';
import styled from 'styled-components';
import { Cell } from 'design/DataTable';
import Icon, * as Icons from 'design/Icon/Icon';

export default function TypeCell() {
  return (
    <Cell style={{ fontSize: '14px' }}>
      <StyledEventType>
        <StyledIcon p="1" mr="3" bg="bgTerminal" as={Icons.Cli} fontSize="4" />
        Session in progress...
      </StyledEventType>
    </Cell>
  );
}

const StyledIcon = styled(Icon)`
  border-radius: 50%;
`;

const StyledEventType = styled.div`
  display: flex;
  align-items: center;
  min-width: 130px;
  font-size: 12px;
  font-weight: 500;
  line-height: 24px;
  white-space: nowrap;
`;

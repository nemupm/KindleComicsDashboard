import * as React from 'react';
import { DEFAULT_XML_PATH } from '../services/KindleService';
import { Card, CardHeader, CardBody, Input } from 'reactstrap';
import Table from '../containers/Table';

export interface Props {
  readXML: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Kindle({ readXML }: Props) {
  return (
    <div className="Kindle">
      <Card className="Kindle-input">
        <CardHeader>
          Open the following file(macOS):[ {DEFAULT_XML_PATH} ]
        </CardHeader>
        <CardBody>
          <Input type="file" onChange={e => readXML(e)} />
        </CardBody>
      </Card>
      <Table />
    </div>
  );
}

export default Kindle;

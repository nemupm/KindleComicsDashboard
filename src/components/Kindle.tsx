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
          Open the following file(macOS):[ {DEFAULT_XML_PATH} ] <br />
          You can open the file by drag and drop it to the form button. <br />
          The file will never be uploaded to any servers and only processed in
          your browser.
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

import * as React from 'react';
import { DEFAULT_XML_PATH } from '../services/KindleService';
import { KindleComicSeries } from '../models/kindle';
import { Card, CardHeader, CardBody, Input } from 'reactstrap';
import Table from './Table';

export interface Props {
  series: KindleComicSeries[];
  filters: {
    minimumVolumes: number;
    onlyNextVolumePublished: boolean;
  };
  readXML: (event: React.ChangeEvent<HTMLInputElement>) => void;
  updateFilter: (
    filters: {
      minimumVolumes: number;
      onlyNextVolumePublished: boolean;
    }
  ) => void;
}

function Kindle({ series, filters, readXML, updateFilter }: Props) {
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
      <Table series={series} filters={filters} />
    </div>
  );
}

export default Kindle;

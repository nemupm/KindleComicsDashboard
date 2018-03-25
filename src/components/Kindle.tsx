import * as React from 'react';
import { KindleService, DEFAULT_XML_PATH } from '../services/KindleService';
import { KindleComicSeries } from '../models/kindle';
import { Card, CardHeader, CardBody, Input } from 'reactstrap';
import Table from './Table';

export interface Props {
  series: KindleComicSeries[];
  filters: {
    minimumVolumes: number;
    onlyNextVolumePublished: boolean;
  };
  loadKindle: (series: KindleComicSeries[]) => void;
  updateFilter: (
    filters: {
      minimumVolumes: number;
      onlyNextVolumePublished: boolean;
    }
  ) => void;
}

function Kindle({ series, filters, loadKindle, updateFilter }: Props) {
  function readFile(event: React.ChangeEvent<HTMLInputElement>) {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      const kindleService = new KindleService(reader.result);
      loadKindle(kindleService.getKindleComicSeries());
    };
  }

  return (
    <div className="Kindle">
      <Card className="Kindle-input">
        <CardHeader>
          Open the following file(macOS):[ {DEFAULT_XML_PATH} ]
        </CardHeader>
        <CardBody>
          <Input type="file" onChange={e => readFile(e)} />
        </CardBody>
      </Card>
      <Table series={series} filters={filters} />
    </div>
  );
}

export default Kindle;

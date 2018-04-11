// @flow

import React from 'react';
import Language from 'material-ui/svg-icons/action/language';
import Work from 'material-ui/svg-icons/action/work';
import QueryBuilder from 'material-ui/svg-icons/action/query-builder';
import PhotoLibrary from 'material-ui/svg-icons/image/photo-library';
import ImportExport from 'material-ui/svg-icons/communication/import-export';
import VerifiedUser from 'material-ui/svg-icons/action/verified-user';

export const colorGenerator = (color: string) => ({
  height: '80px',
  width: '80px',
  padding: '1.5rem',
  border: `1px solid ${color}`,
  color,
  borderRadius: '50%'
});

export const iconGenerator = (id: number) => {
  switch (id) {
    case 0:
      return <Language style={colorGenerator('#C2185B')} />;
    case 1:
      return <Work style={colorGenerator('#0097A7')} />;
    case 2:
      return <QueryBuilder style={colorGenerator('#E64A19')} />;
    case 3:
      return <PhotoLibrary style={colorGenerator('#00796B')} />;
    case 4:
      return <ImportExport style={colorGenerator('#7B1FA2')} />;
    case 5:
      return <VerifiedUser style={colorGenerator('#303F9F')} />;
  }
};

import React from 'react';
import Tree from 'react-d3-tree';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: 'Deputy',
  children: [
    {
      name: 'Principal',
      attributes: {
        department: 'Production',
      },
      children: [
        {
          name: 'Chief',
          attributes: {
            department: 'Fabrication',
          },
          children: [
            {
              name: 'STE',
            },
          ],
        },
      ],
    },
  ],
};

export default function OrgChartTree() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div id="treeWrapper" style={{ width: '50em', height: '20em' }}>
      <Tree data={orgChart} />
    </div>
  );
}
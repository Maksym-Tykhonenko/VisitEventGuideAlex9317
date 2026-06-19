import qrcode from 'qrcode-generator';
import React, {useMemo} from 'react';
import {StyleSheet, View} from 'react-native';

import {colors} from '../../constants/theme';

type PassQRCodeProps = {
  value: string;
  size: number;
  foregroundColor?: string;
  backgroundColor?: string;
};

export function PassQRCode({
  value,
  size,
  foregroundColor = colors.cream,
  backgroundColor = 'transparent',
}: PassQRCodeProps) {
  const {moduleCount, cells} = useMemo(() => {
    const qr = qrcode(0, 'M');
    qr.addData(value);
    qr.make();

    const count = qr.getModuleCount();
    const matrix: boolean[][] = [];

    for (let row = 0; row < count; row += 1) {
      const rowCells: boolean[] = [];
      for (let col = 0; col < count; col += 1) {
        rowCells.push(qr.isDark(row, col));
      }
      matrix.push(rowCells);
    }

    return {moduleCount: count, cells: matrix};
  }, [value]);

  const cellSize = size / moduleCount;

  return (
    <View
      style={[
        styles.PassQRCodeFacetChassis,
        {width: size, height: size, backgroundColor},
      ]}>
      {cells.map((row, rowIndex) => (
        <View key={`row-${rowIndex}`} style={styles.PassQRCodeRow}>
          {row.map((isDark, colIndex) => (
            <View
              key={`cell-${rowIndex}-${colIndex}`}
              style={{
                width: cellSize,
                height: cellSize,
                backgroundColor: isDark ? foregroundColor : backgroundColor,
              }}
            />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  PassQRCodeFacetChassis: {
    overflow: 'hidden',
  },
  PassQRCodeRow: {
    flexDirection: 'row',
  },
});

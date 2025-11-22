var wms_layers = [];


        var lyr_GoogleSatelliteHybrid_0 = new ol.layer.Tile({
            'title': 'Google Satellite Hybrid',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_TPHCMRANH_1 = new ol.format.GeoJSON();
var features_TPHCMRANH_1 = format_TPHCMRANH_1.readFeatures(json_TPHCMRANH_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPHCMRANH_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPHCMRANH_1.addFeatures(features_TPHCMRANH_1);
var lyr_TPHCMRANH_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPHCMRANH_1, 
                style: style_TPHCMRANH_1,
                popuplayertitle: 'TPHCM.RANH',
                interactive: false,
                title: '<img src="styles/legend/TPHCMRANH_1.png" /> TPHCM.RANH'
            });
var format_TPHCMXAPHUONG_2 = new ol.format.GeoJSON();
var features_TPHCMXAPHUONG_2 = format_TPHCMXAPHUONG_2.readFeatures(json_TPHCMXAPHUONG_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TPHCMXAPHUONG_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TPHCMXAPHUONG_2.addFeatures(features_TPHCMXAPHUONG_2);
var lyr_TPHCMXAPHUONG_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TPHCMXAPHUONG_2, 
                style: style_TPHCMXAPHUONG_2,
                popuplayertitle: 'TPHCM.XAPHUONG',
                interactive: true,
    title: 'TPHCM.XAPHUONG<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_0.png" /> An Đông<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_1.png" /> An Hội Đông<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_2.png" /> An Hội Tây<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_3.png" /> An Khánh<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_4.png" /> An Lạc<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_5.png" /> An Long<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_6.png" /> An Nhơn<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_7.png" /> An Nhơn Tây<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_8.png" /> An Phú<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_9.png" /> An Phú Đông<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_10.png" /> An Thới Đông<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_11.png" /> Bà Điểm<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_12.png" /> Bà Rịa<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_13.png" /> Bắc Tân Uyên<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_14.png" /> Bàn Cờ<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_15.png" /> Bàu Bàng<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_16.png" /> Bàu Lâm<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_17.png" /> Bảy Hiền<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_18.png" /> Bến Cát<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_19.png" /> Bến Thành<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_20.png" /> Bình Chánh<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_21.png" /> Bình Châu<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_22.png" /> Bình Cơ<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_23.png" /> Bình Đông<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_24.png" /> Bình Dương<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_25.png" /> Bình Giã<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_26.png" /> Bình Hòa<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_27.png" /> Bình Hưng<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_28.png" /> Bình Hưng Hòa<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_29.png" /> Bình Khánh<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_30.png" /> Bình Lợi<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_31.png" /> Bình Lợi Trung<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_32.png" /> Bình Mỹ<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_33.png" /> Bình Phú<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_34.png" /> Bình Quới<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_35.png" /> Bình Tân<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_36.png" /> Bình Tây<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_37.png" /> Bình Thạnh<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_38.png" /> Bình Thới<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_39.png" /> Bình Tiên<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_40.png" /> Bình Trị Đông<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_41.png" /> Bình Trưng<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_42.png" /> Cần Giờ<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_43.png" /> Cát Lái<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_44.png" /> Cầu Kiệu<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_45.png" /> Cầu Ông Lãnh<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_46.png" /> Chánh Hiệp<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_47.png" /> Chánh Hưng<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_48.png" /> Chánh Phú Hòa<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_49.png" /> Châu Đức<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_50.png" /> Châu Pha<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_51.png" /> Chợ Lớn<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_52.png" /> Chợ Quán<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_53.png" /> Côn Đảo<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_54.png" /> Củ Chi<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_55.png" /> Đất Đỏ<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_56.png" /> Dầu Tiếng<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_57.png" /> Dĩ An<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_58.png" /> Diên Hồng<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_59.png" /> Đông Hòa<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_60.png" /> Đông Hưng Thuận<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_61.png" /> Đông Thạnh<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_62.png" /> Đức Nhuận<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_63.png" /> Gia Định<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_64.png" /> Gò Vấp<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_65.png" /> Hạnh Thông<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_66.png" /> Hiệp Bình<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_67.png" /> Hiệp Phước<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_68.png" /> Hồ Tràm<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_69.png" /> Hòa Bình<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_70.png" /> Hòa Hiệp<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_71.png" /> Hòa Hội<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_72.png" /> Hòa Hưng<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_73.png" /> Hòa Lợi<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_74.png" /> Hóc Môn<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_75.png" /> Hưng Long<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_76.png" /> Khánh Hội<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_77.png" /> Kim Long<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_78.png" /> Lái Thiêu<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_79.png" /> Linh Xuân<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_80.png" /> Long Bình<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_81.png" /> Long Điền<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_82.png" /> Long Hải<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_83.png" /> Long Hòa<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_84.png" /> Long Hương<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_85.png" /> Long Nguyên<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_86.png" /> Long Phước<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_87.png" /> Long Sơn<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_88.png" /> Long Trường<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_89.png" /> Minh Phụng<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_90.png" /> Minh Thạnh<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_91.png" /> Ngãi Giao<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_92.png" /> Nghĩa Thành<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_93.png" /> Nhà Bè<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_94.png" /> Nhiêu Lộc<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_95.png" /> Nhuận Đức<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_96.png" /> Phú An<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_97.png" /> Phú Định<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_98.png" /> Phú Giáo<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_99.png" /> Phú Hòa Đông<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_100.png" /> Phú Lâm<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_101.png" /> Phú Lợi<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_102.png" /> Phú Mỹ<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_103.png" /> Phú Nhuận<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_104.png" /> Phú Thạnh<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_105.png" /> Phú Thọ<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_106.png" /> Phú Thọ Hòa<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_107.png" /> Phú Thuận<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_108.png" /> Phước Hải<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_109.png" /> Phước Hòa<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_110.png" /> Phước Long<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_111.png" /> Phước Thắng<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_112.png" /> Phước Thành<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_113.png" /> Rạch Dừa<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_114.png" /> Sài Gòn<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_115.png" /> Tam Bình<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_116.png" /> Tam Long<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_117.png" /> Tam Thắng<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_118.png" /> Tân An Hội<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_119.png" /> Tân Bình<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_120.png" /> Tân Định<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_121.png" /> Tân Đông Hiệp<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_122.png" /> Tân Hải<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_123.png" /> Tân Hiệp<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_124.png" /> Tân Hòa<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_125.png" /> Tân Hưng<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_126.png" /> Tân Khánh<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_127.png" /> Tân Mỹ<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_128.png" /> Tân Nhựt<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_129.png" /> Tân Phú<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_130.png" /> Tân Phước<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_131.png" /> Tân Sơn<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_132.png" /> Tân Sơn Hòa<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_133.png" /> Tân Sơn Nhất<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_134.png" /> Tân Sơn Nhì<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_135.png" /> Tân Tạo<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_136.png" /> Tân Thành<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_137.png" /> Tân Thới Hiệp<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_138.png" /> Tân Thuận<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_139.png" /> Tân Uyên<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_140.png" /> Tân Vĩnh Lộc<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_141.png" /> Tăng Nhơn Phú<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_142.png" /> Tây Nam<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_143.png" /> Tây Thạnh<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_144.png" /> Thái Mỹ<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_145.png" /> Thanh An<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_146.png" /> Thạnh An<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_147.png" /> Thạnh Mỹ Tây<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_148.png" /> Thới An<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_149.png" /> Thới Hòa<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_150.png" /> Thông Tây Hội<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_151.png" /> Thủ Dầu Một<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_152.png" /> Thủ Đức<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_153.png" /> Thuận An<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_154.png" /> Thuận Giao<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_155.png" /> Thường Tân<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_156.png" /> Trừ Văn Thố<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_157.png" /> Trung Mỹ Tây<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_158.png" /> Vĩnh Hội<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_159.png" /> Vĩnh Lộc<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_160.png" /> Vĩnh Tân<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_161.png" /> Vũng Tàu<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_162.png" /> Vườn Lài<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_163.png" /> Xóm Chiếu<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_164.png" /> Xuân Hòa<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_165.png" /> Xuân Sơn<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_166.png" /> Xuân Thới Sơn<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_167.png" /> Xuyên Mộc<br />\
    <img src="styles/legend/TPHCMXAPHUONG_2_168.png" /> <br />' });

lyr_GoogleSatelliteHybrid_0.setVisible(true);lyr_TPHCMRANH_1.setVisible(true);lyr_TPHCMXAPHUONG_2.setVisible(true);
var layersList = [lyr_GoogleSatelliteHybrid_0,lyr_TPHCMRANH_1,lyr_TPHCMXAPHUONG_2];
lyr_TPHCMRANH_1.set('fieldAliases', {'ma_tinh': 'ma_tinh', 'ten_tinh': 'ten_tinh', 'sap_nhap': 'sap_nhap', 'quy_mo': 'quy_mo', 'tru_so': 'tru_so', 'loai': 'loai', 'cap': 'cap', 'stt': 'stt', 'dtich_km2': 'dtich_km2', 'dan_so': 'dan_so', 'matdo_km2': 'matdo_km2', });
lyr_TPHCMXAPHUONG_2.set('fieldAliases', {'ma_xa': 'ma_xa', 'ten_xa': 'ten_xa', 'sap_nhap': 'sap_nhap', 'tru_so': 'tru_so', 'loai': 'loai', 'cap': 'cap', 'stt': 'stt', 'dtich_km2': 'dtich_km2', 'dan_so': 'dan_so', 'matdo_km2': 'matdo_km2', 'ma_tinh': 'ma_tinh', 'ten_tinh': 'ten_tinh', });
lyr_TPHCMRANH_1.set('fieldImages', {'ma_tinh': 'TextEdit', 'ten_tinh': 'TextEdit', 'sap_nhap': 'TextEdit', 'quy_mo': 'TextEdit', 'tru_so': 'TextEdit', 'loai': 'TextEdit', 'cap': 'Range', 'stt': 'Range', 'dtich_km2': 'TextEdit', 'dan_so': 'Range', 'matdo_km2': 'TextEdit', });
lyr_TPHCMXAPHUONG_2.set('fieldImages', {'ma_xa': 'TextEdit', 'ten_xa': 'TextEdit', 'sap_nhap': 'TextEdit', 'tru_so': 'TextEdit', 'loai': 'TextEdit', 'cap': 'Range', 'stt': 'Range', 'dtich_km2': 'TextEdit', 'dan_so': 'Range', 'matdo_km2': 'TextEdit', 'ma_tinh': 'TextEdit', 'ten_tinh': 'TextEdit', });
lyr_TPHCMRANH_1.set('fieldLabels', {'ma_tinh': 'no label', 'ten_tinh': 'no label', 'sap_nhap': 'no label', 'quy_mo': 'no label', 'tru_so': 'no label', 'loai': 'no label', 'cap': 'no label', 'stt': 'no label', 'dtich_km2': 'no label', 'dan_so': 'no label', 'matdo_km2': 'no label', });
lyr_TPHCMXAPHUONG_2.set('fieldLabels', {'ma_xa': 'no label', 'ten_xa': 'inline label - visible with data', 'sap_nhap': 'no label', 'tru_so': 'no label', 'loai': 'no label', 'cap': 'no label', 'stt': 'inline label - visible with data', 'dtich_km2': 'inline label - visible with data', 'dan_so': 'inline label - visible with data', 'matdo_km2': 'no label', 'ma_tinh': 'no label', 'ten_tinh': 'no label', });
lyr_TPHCMXAPHUONG_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'lighten';
});
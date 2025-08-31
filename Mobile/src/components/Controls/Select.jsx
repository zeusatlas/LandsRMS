import React, { useState, useEffect, useMemo } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Modal,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Label from './Label';
import { COLORS } from '../../styles/theme';

const OptionItem = React.memo(({ label, value, onSelect }) => (
  <TouchableOpacity style={styles.option} onPress={() => onSelect(value)}>
    <Label style={styles.optionText}>{label}</Label>
  </TouchableOpacity>
));

const Select = ({
  icon,
  label,
  placeholder,
  options,
  value,
  onChange,
  style,
  containerStyle,
  labelStyle,
  modalStyle,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [search, setSearch] = useState('');
  const selectedLabel = options.find(opt => opt.value === value)?.label || '';
  const shouldFloatLabel = isFocused || selectedLabel;

  const filteredOptions = useMemo(() => {
    return options.filter(opt =>
      opt.label.toLowerCase().includes(search.toLowerCase())
    );
  }, [options, search]);

  const handleSelect = val => {
    onChange?.(val);
    setModalVisible(false);
    setIsFocused(false);
    setSearch('');
  };

  useEffect(() => {
    if (!modalVisible) setSearch('');
  }, [modalVisible]);

  const renderOptionItem = ({ item }) => (
    <OptionItem label={item.label} value={item.value} onSelect={handleSelect} />
  );

  return (
    <View style={[styles.container, containerStyle]}>
      {shouldFloatLabel && (
        <Label style={[styles.floatingLabel, labelStyle]}>
          {label || placeholder}
        </Label>
      )}

      <TouchableOpacity
        style={styles.inputWrapper}
        activeOpacity={0.8}
        onPress={() => {
          setModalVisible(true);
          setIsFocused(true);
        }}
      >
        {icon && (
          <Ionicons
            name={icon}
            size={16}
            color={COLORS.secondary}
            style={styles.icon}
          />
        )}
        <Label
          style={[
            styles.input,
            style,
            { color: value ? COLORS.secondary : COLORS.gray },
          ]}
        >
          {selectedLabel || placeholder}
        </Label>
        {value ? (
          <TouchableOpacity
            onPress={() => {
              onChange?.('');
              setIsFocused(false);
            }}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <Ionicons
              name="close-circle"
              size={20}
              color={COLORS.danger || 'tomato'}
            />
          </TouchableOpacity>
        ) : (
          <Ionicons name="chevron-down" size={20} color={COLORS.secondary} />
        )}
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent animationType="fade" onRequestClose={() => setModalVisible(false)} >
        <TouchableOpacity activeOpacity={1} onPressOut={() => setModalVisible(false)} style={styles.modalOverlay}>
          <View style={[styles.modalDropdown, modalStyle]}>
            <TextInput
              placeholder="Search..."
              placeholderTextColor={COLORS.gray}
              style={styles.searchInput}
              value={search}
              onChangeText={setSearch}
              autoFocus
            />
            <FlatList
              data={filteredOptions}
              keyExtractor={(item, index) =>
                `${item.label}-${item.value}-${index}`
              }
              keyboardShouldPersistTaps="handled"
              style={{ maxHeight: 300 }}
              renderItem={renderOptionItem}
              initialNumToRender={20}
              maxToRenderPerBatch={20}
              windowSize={10}
            />
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

export default Select;

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    position: 'relative',
  },
  inputWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: COLORS.secondary,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 14,
    backgroundColor: 'transparent',
    justifyContent: 'space-between',
  },
  icon: {
    marginRight: 6,
  },
  input: {
    flex: 1,
    fontSize: 12,
  },
  floatingLabel: {
    position: 'absolute',
    top: -20,
    left: 5,
    paddingHorizontal: 4,
    fontSize: 12,
    fontWeight: '600',
    color: COLORS.secondary,
    zIndex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  modalDropdown: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 16,
    elevation: 5,
  },
  searchInput: {
    height: 40,
    paddingHorizontal: 10,
    fontSize: 14,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.gray,
    color: COLORS.secondary,
    marginBottom: 10,
  },
  option: {
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  optionText: {
    fontSize: 14,
    color: COLORS.secondary,
  },
});

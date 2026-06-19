import React, {useState} from 'react';
import {
  Pressable,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {ScreenBackHeader} from '../../components/clubPass/ScreenBackHeader';
import {useGuestInfo} from '../../context/GuestInfoContext';
import {colors, fonts} from '../../constants/theme';

type EditGuestInfoScreenProps = {
  onBack: () => void;
};

export function EditGuestInfoScreen({onBack}: EditGuestInfoScreenProps) {
  const insets = useSafeAreaInsets();
  const {guest, updateGuest} = useGuestInfo();
  const [guestName, setGuestName] = useState(guest.guestName);
  const [visitType, setVisitType] = useState(guest.visitType);
  const [preferredContact, setPreferredContact] = useState(
    guest.preferredContact,
  );
  const [notes, setNotes] = useState(guest.notes);

  const handleSave = () => {
    updateGuest({
      guestName: guestName.trim() || guest.guestName,
      visitType: visitType.trim() || guest.visitType,
      preferredContact: preferredContact.trim(),
      notes: notes.trim(),
    });
    onBack();
  };

  return (
    <View style={styles.EditGuestInfoScreenFacetChassis}>
      <StatusBar barStyle="light-content" backgroundColor={colors.background} />
      <ScrollView
        contentContainerStyle={[
          styles.EditGuestInfoScreenScrollContent,
          {paddingBottom: insets.bottom + 24},
        ]}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <ScreenBackHeader
          title="Edit Guest Info"
          backLabel="Back"
          onBack={onBack}
        />

        <View style={styles.EditGuestInfoScreenBody}>
          <View style={styles.EditGuestInfoScreenFormCard}>
            <FormField label="Guest Name">
              <TextInput
                value={guestName}
                onChangeText={setGuestName}
                style={styles.EditGuestInfoScreenInputFiligree}
                placeholderTextColor={colors.body}
              />
            </FormField>

            <FormField label="Visit Type">
              <TextInput
                value={visitType}
                onChangeText={setVisitType}
                style={styles.EditGuestInfoScreenInputFiligree}
                placeholderTextColor={colors.body}
              />
            </FormField>

            <FormField label="Preferred Contact">
              <TextInput
                value={preferredContact}
                onChangeText={setPreferredContact}
                style={styles.EditGuestInfoScreenInputFiligree}
                placeholderTextColor={colors.body}
              />
            </FormField>

            <FormField label="Notes">
              <TextInput
                value={notes}
                onChangeText={setNotes}
                style={[
                  styles.EditGuestInfoScreenInputFiligree,
                  styles.EditGuestInfoScreenNotesInputFiligree,
                ]}
                multiline
                placeholder="Preferences or accessibility notes…"
                placeholderTextColor={colors.body}
              />
            </FormField>
          </View>

          <Pressable onPress={handleSave}>
            <LinearGradient
              colors={[colors.buttonGradientStart, colors.buttonGradientEnd]}
              start={{x: 0, y: 0}}
              end={{x: 1, y: 1}}
              style={styles.EditGuestInfoScreenSavePortico}>
              <View style={styles.EditGuestInfoScreenSaveInnerEnclave}>
                <Text style={styles.EditGuestInfoScreenSaveFiligree}>
                  Save Details
                </Text>
              </View>
            </LinearGradient>
          </Pressable>
        </View>
      </ScrollView>
    </View>
  );
}

type FormFieldProps = {
  label: string;
  children: React.ReactNode;
};

function FormField({label, children}: FormFieldProps) {
  return (
    <View style={styles.EditGuestInfoScreenField}>
      <Text style={styles.EditGuestInfoScreenFieldLabelFiligree}>{label}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  EditGuestInfoScreenFacetChassis: {
    backgroundColor: colors.surface,
    flex: 1,
  },
  EditGuestInfoScreenScrollContent: {
    flexGrow: 1,
  },

  EditGuestInfoScreenBody: {
    gap: 14,
    paddingHorizontal: 16,
    paddingTop: 14,
  },
  EditGuestInfoScreenFormCard: {
    backgroundColor: colors.card,
    borderColor: colors.progressTrack,
    borderRadius: 16,
    borderWidth: 1,
    gap: 14,
    paddingHorizontal: 17,
    paddingVertical: 15,
  },

  EditGuestInfoScreenField: {
    gap: 3,
  },
  EditGuestInfoScreenFieldLabelFiligree: {
    color: colors.body,
    fontFamily: fonts.sansRegular,
    fontSize: 9,
    letterSpacing: 1.08,
    textTransform: 'uppercase',
  },
  EditGuestInfoScreenInputFiligree: {
    backgroundColor: colors.qrBackground,
    borderColor: colors.progressTrack,
    borderRadius: 10,
    borderWidth: 1,
    color: colors.cream,
    fontFamily: fonts.sansRegular,
    fontSize: 14,
    paddingHorizontal: 13,
    paddingVertical: 11,
  },

  EditGuestInfoScreenNotesInputFiligree: {
    height: 68,
    textAlignVertical: 'top',
  },
  EditGuestInfoScreenSavePortico: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  EditGuestInfoScreenSaveInnerEnclave: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 13,
  },

  EditGuestInfoScreenSaveFiligree: {
    color: colors.buttonText,
    fontFamily: fonts.sansBold,
    fontSize: 14,
  },
});

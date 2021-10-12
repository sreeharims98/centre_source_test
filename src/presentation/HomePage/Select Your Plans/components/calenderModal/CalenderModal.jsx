import { Calendar, Modal } from "antd";
import moment from "moment";
import React from "react";
import { useFoodItemsStore } from "../../store";
import "./CalenderModalStyle.css";

const CalenderModal = () => {
  const [
    { calenderModal, calenderDate },
    { setCalenderModal, onCalenderChange },
  ] = useFoodItemsStore();

  function onPanelChange(value, mode) {}

  return (
    <Modal
      className="my-modal"
      title={moment(calenderDate).format("DD/MM/YYYY")}
      visible={calenderModal}
      onOk={() => setCalenderModal(false)}
      onCancel={() => setCalenderModal(false)}
    >
      {calenderDate && (
        <Calendar
          fullscreen={false}
          onPanelChange={onPanelChange}
          value={calenderDate}
          onSelect={(e) => onCalenderChange(e)}
        />
      )}
    </Modal>
  );
};

export default CalenderModal;

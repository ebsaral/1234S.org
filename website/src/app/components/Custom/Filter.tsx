import classnames from 'classnames';
import { Select } from 'radix-ui';
import { LuChevronDown } from 'react-icons/lu';

const Filter = ({
  className,
  defaultValue,
  values,
  onChange,
}: {
  className?: string;
  defaultValue: string;
  values: { value: string; label: string }[];
  onChange?: (value: string) => void;
}) => {
  return (
    <div className={classnames('', className)}>
      <Select.Root defaultValue={defaultValue} onValueChange={onChange}>
        <Select.Trigger className='inline-flex items-center justify-between gap-2 rounded border px-3 py-2 text-sm bg-white hover:bg-gray-50'>
          <Select.Value />
          <Select.Icon>
            <LuChevronDown />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className='overflow-hidden rounded border bg-white shadow-md'>
            <Select.Viewport>
              {values.map((item) => (
                <Select.Item
                  key={`key-${item.value}`}
                  value={item.value}
                  className='cursor-pointer select-none rounded px-1 sm:px-3 py-2 text-sm hover:bg-gray-200'
                >
                  <Select.ItemText>{item.label}</Select.ItemText>
                </Select.Item>
              ))}
            </Select.Viewport>
            <Select.Arrow />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

export default Filter;
